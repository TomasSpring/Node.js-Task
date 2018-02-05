module.exports = function(app) {
    let blogs = require('./controllers/blogs');
    let auth = require('./controllers/AuthController.js');
    app.get('/blogs', blogs.findAll);
    app.get('/blogs/:id', blogs.findById);
    app.put('/blogs/:id', blogs.update);
    app.post('/blogs', blogs.add);
    app.delete('/blogs/:id', blogs.delete);
    app.get('/import', blogs.import);
    app.get('/', auth.home);
    app.get('/register', auth.register);
    app.post('/register', auth.doRegister);
    app.get('/login', auth.login);
    app.post('/login', auth.doLogin);
    app.get('/logout', auth.logout);
};