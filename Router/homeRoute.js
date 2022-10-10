const express = require('express')
const Router = express.Router()
const homeController = require('../Controller/homeController')

Router.get('/', homeController.index)
Router.get('/about', homeController.about)
Router.get('/post', homeController.post)
Router.get('/contact', homeController.contact)
// ---------
Router.get('/login', homeController.login)
Router.get('/signup', homeController.signup)

module.exports = Router