const {model, Schema} = require('mongoose')

const userScema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  }
})

module.exports = model('users', userScema)