const CommonSchema = require('../../models/schema/commonSchema')


const HomePageController = (req, res) => {
  res.render('default/index')
}

const GETRegistrationController = (req, res) => {
  res.render('default/registration')
}

module.exports = {
  HomePageController,
  GETRegistrationController
}