let user_controller = require('../controllers/user.controller');
let auth_controller = require('../controllers/auth.controller');

module.exports = (app) => {

  app.post('/api/user/logar', auth_controller.logar)
  app.post('/api/user', user_controller.createUser)
  app.get('/api/user/:id/posts', user_controller.getPostsUser)

  app.use('/api/user', auth_controller.verificarToken)

  app.get('/api/user', user_controller.getUsers)
  app.get('/api/user/:id', user_controller.getUserById)
  app.put('/api/user', user_controller.editUser)
  app.delete('/api/user', user_controller.deleteUser)
}