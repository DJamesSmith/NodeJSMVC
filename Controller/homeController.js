exports.index = ((req, res) => {
    res.render('index', {
        title: "Home Page"
    })
})

exports.about = ((req, res) => {
    res.render('about', {
        title: "About Page"
    })
})

exports.post = ((req, res) => {
    res.render('post', {
        title: "Post Page"
    })
})

exports.contact = ((req, res) => {
    res.render('contact', {
        title: "Contact Page"
    })
})

// ------------------

exports.login = ((req, res) => {
    res.render('login', {
        title: "Login Page"
    })
})

exports.signup = ((req, res) => {
    res.render('signup', {
        title: "SignUp Page"
    })
})