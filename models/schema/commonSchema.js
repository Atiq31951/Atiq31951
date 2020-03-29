const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CommonSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    validate: (name) => {
      if (name.length === 0) {
        return false
      }
      if (name[0] >= 'A' && name[0] <= 'Z') {
        return false
      }
      return true
    }
  },
  last_name: {
    type: String,
    required: true,
    validate: (name) => {
      if (name.length === 0) {
        return false
      }
      if (name[0] >= 'A' && name[0] <= 'Z') {
        return false
      }
      return true
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
    validate: (emaill) => {
      const regex = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$"
      return regex.test(emaill)
    }
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    maxlength: 14,
    minlength: 11,
    validate: (number) => {
      return number.length === 11 ? (
        number.slice(0, 2) === '01' ? true : false
      ) : (
        number.length === 14 ? ((number.slice(0, 5) === '+8801') ? true : false) : false
      )
    }
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  last_updated: {
    type: Date,
    required: false,
    default: new Date()
  },
  password: {
    type: String,
    minlength: 6
  }
})

module.exports = {
  CommonSchema: mongoose.model(CommonSchema)
}
