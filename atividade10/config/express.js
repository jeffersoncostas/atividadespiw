let express = require('express');
let body_parser = require('body-parser')
let path = require('path');

let user_routes = require('../app/routers/user.route')
let posts_routes = require('../app/routers/posts.route')

module.exports = () => {
  let app = express()
    .set('port', 3000)
    .use(body_parser.json())
    .use(body_parser.urlencoded({
      extended: false
    }));
  user_routes(app);
  posts_routes(app);

  return app;
}