let posts_controller = require('../controllers/posts.controller')
let auth_controller = require('../controllers/auth.controller')

module.exports = (app) => {
  app.get('/api/posts', posts_controller.getAllPosts)
  app.get('/api/posts/:id', posts_controller.getPostById)
  app.get('/api/posts/:id/user', posts_controller.getUserPostById)

  app.use('/api/posts', auth_controller.verificarToken)

  app.post('/api/posts', posts_controller.newPost)
  app.put('/api/posts/:id', posts_controller.editPostById)
  app.delete('/api/posts/:id', posts_controller.deletePostById)
}