const AuthController = require("./controllers/AuthController")
const UserController = require("./controllers/UserController")
const ArticleController = require("./controllers/ArticleController")
const CommentController = require("./controllers/CommentController")

const _routes = [
    ['', AuthController],
    ['/user', UserController],
    ['/article', ArticleController],
    ['/comment', CommentController]
]

const routes = (app) => {
    _routes.forEach(route => {
        const [ url, controller ] = route
        app.use(`/api${url}`, controller)
    });
}

module.exports = routes