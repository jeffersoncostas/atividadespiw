let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let User = require('../models/user.model');
let Posts = require('../models/posts.model');

module.exports.createUser = (requisicao, response) => {

  let userModel = new User({
    nome: requisicao.body.nome,
    email: requisicao.body.email,
    senha: bcrypt.hashSync(requisicao.body.senha, 10)
  });

  User.create(userModel).then(user => {
    response.status(201).json({
      id: user._id,
      nome: user.nome,
      email: user.email
    })
  }).catch(e => {
    response.status(404).send('Erro')
  });

}

module.exports.getUsers = (requisicao, response, ) => {
  User.find().select("-senha").exec().then(users => {
    response.json(users)
  }).catch(e => {
    response.status(404).send('erro')
  })

}

module.exports.editUser = (requisicao, response) => {
  let token = requisicao.query.token;
  let userId = jwt.decode(token).id;
  let user = {
    nome: requisicao.body.nome,
    email: requisicao.body.email,
    senha: bcrypt.hashSync(requisicao.body.senha, 10)
  }
  User.findByIdAndUpdate(userId, {
    $set: user
  }).then((e) => {
    response.status(201).send(user)
  }).catch(er => {
    response.status(500).send('Erro ao atualizar');
  })

}

module.exports.getUserById = (requisicao, response) => {
  let id = requisicao.params.id;
  let error = (req, res) => res.status(500).send();

  User.findById(id).select("-senha").exec().then(user => {
    response.status(201).json(user)
  }).catch(error)
}

module.exports.deleteUser = (requisicao, response) => {
  let token = requisicao.query.token;
  let userId = jwt.decode(token).id;

  User.findByIdAndRemove(userId).then(e => {
    response.status(201).send('Conta Apagada!')
  }).catch(er => {
    response.status(500).send('Ocorreu algum erro!')
  })
}

module.exports.getPostsUser = (requisicao, response) => {

  let id = requisicao.params.id;

  Posts.find({
    userId: id
  }).then(posts => {
    response.status(201).json(posts)
  }).catch(() => {
    response.status(404).json({
      message: "Usuario invalido"
    })

  })
}