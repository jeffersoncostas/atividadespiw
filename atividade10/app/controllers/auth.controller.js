let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let User = require('../models/user.model');

module.exports.logar = (requisicao, response) => {
    User.findOne({
            email: requisicao.body.email
        }).exec()

        .then(user => {
            if (bcrypt.compareSync(requisicao.body.senha, user.senha)) {
                let token = jwt.sign({
                    id: user._id
                }, 'codigo')

                response.status(200).json({
                    id: user._id,
                    token: token,
                    message: "Logou toda"
                })
            } else {
                response.status(401).send('Inválido more')
            }
        }).catch(e => {
            response.status(401).send("Invalido novamente " + e)
        })
}

module.exports.verificarToken = (requisicao, response, next) => {
    jwt.verify(requisicao.query.token, 'codigo', (e, decoded) => {
        if (e) {
            response.status(401).json({
                message: "Pode não bebe"
            })
        } else {
            next()
        }
    })
}