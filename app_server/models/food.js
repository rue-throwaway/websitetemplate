var mongoose = require('mongoose')

var foodSchema = mongoose.Schema({
    food: String
})

mongoose.model('Food', foodSchema, 'foods')