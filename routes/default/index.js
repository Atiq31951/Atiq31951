const express = require('express')
const route = express.Router()
const {
  HomePageController,
  GETRegistrationController
} = require('../../controllers/default')

// Routes
route.get('/', HomePageController)
route.get('/register', GETRegistrationController)

module.exports = route