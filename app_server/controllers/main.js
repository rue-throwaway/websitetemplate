var mongoose = require('mongoose');
var Food = mongoose.model('Food');
var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.findFood = function(req, res)
{
    Food.find().exec(function(err, data){
        console.log(data);
        sendJSONresponse(res, 200, data);
    })
}

module.exports.index = function(req, res)
{
    res.render('index', {})
}

module.exports.food = function(req, res)
{
    res.render('index', {title: "Chips"})
}

