let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let User = require('../models/user.model');
let Posts = require('../models/posts.model');

module.exports.getAllPosts = (requisicao, response) => {
  Posts.find().populate('userId', 'nome').exec().then(posts => {
    response.status(201).json(posts)
  }).catch(err => {
    res.status(404).send("Erro")
  })

}
module.exports.getPostById = (requisicao, response) => {
  let id = requisicao.params.id;
  Posts.findById(id).then(post => {
    response.json(post)
  }).catch(() => {
    response.status(404).send("Id invalido")
  })

}
module.exports.newPost = (requisicao, response) => {
  let token = requisicao.query.token;
  let userIdToken = jwt.decode(token).id;

  let post = new Posts({
    text: requisicao.body.text,
    likes: 0,
    userId: userIdToken
  })

  Posts.create(post).then(post => {
    response.status(201).json(post)
  }).catch(() => {
    response.status(500).send('Erro ao fazer post');
  })

}
module.exports.editPostById = (requisicao, response) => {
  let postId = requisicao.params.id;
  let token = requisicao.query.token;
  let userIdToken = jwt.decode(token).id;

  let newPost = {
    text: requisicao.body.text
  }

  Posts.findOneAndUpdate({
    userId: userIdToken,
    _id: postId
  }, newPost).then(post => {
    response.json(post)
  }).catch(() => {
    response.status(401).send("Erro")
  })

}
module.exports.deletePostById = (requisicao, response) => {
  let postId = requisicao.params.id;
  let token = requisicao.query.token;
  let userIdToken = jwt.decode(token).id;


  Posts.findOneAndRemove({
    userId: userIdToken,
    _id: postId
  }).then(() => {
    response.status(201).json({
      message: "Post Apagado!"
    })
  }).catch(() => {
    response.status(404).json({
      message: "Post inexistente"
    })
  })

}


module.exports.getUserPostById = (requisicao, response) => {
  let postId = requisicao.params.id;
  console.log('ativadoo')
  Posts.findOne({
    _id: postId
  }).select('userId').populate('userId').then(post => {
    let usuario = post.userId
    let user = {
      id: usuario._id,
      nome: usuario.nome,
      email: usuario.email
    }
    response.status(201).json(user)
  }).catch(() => {
    response.status(500).json({
      message: "Post não encontrado"
    })

  })

}