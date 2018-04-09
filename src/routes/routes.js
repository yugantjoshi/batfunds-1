function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next()
    res.redirect('/login')
}

module.exports = function(path, app, dbClass, passport, router) {

    app.get('/', function(req, res) {
        if (req.user) {
            res.redirect('/app');
            return;
        }
        res.sendFile(path.join(__dirname + '/../views/index.html'))
    })

    app.get('/getCurrentUser', function(req, res) {
        user = req.user
        if (user) delete user[password]
        res.json(user)
    })

    require('./loginFlow.js')(path, app, dbClass, passport)
    require('./appRoutes.js')(router, dbClass)

    app.get('/app', isLoggedIn, function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/app.html'))
    })

}
