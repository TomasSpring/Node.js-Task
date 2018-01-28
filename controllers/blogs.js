var mongoose = require('mongoose'),
Blogs = mongoose.model('Blogs');

exports.findAll = function(req, res){
  Blogs.find({},function(err, results) {
    return res.sendStatus(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Blogs.findOne({'_id':id},function(err, result) {
    return res.sendStatus(result);
  });
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Blogs.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) return console.log(err);
    console.log('Updated %d blog', numberAffected);
    return res.sendStatus(raw);
  });
}

exports.add = function(req, res) {
  Blogs.create(req.body, function (err, blog) {
    if (err) return console.log(err); 
    return res.sendStatus(blog);
  });
}

exports.delete = function(req, res){
  var id = req.params.id;
  Blogs.remove({'_id':id},function(result) {
    return res.sendStatus(result);
  });
};

exports.import = function(req, res){
  Blogs.create( 
    { "name": "Ben", "brief": "DJ Code Red"},
    { "name": "Mike D.","brief": "Kingston Kats"},
    { "name": "Eric", "brief": "Eric"},
    { "name": "Paul", "brief": "The Eyeliners"}             
  , function (err) {
    if (err) return console.log(err); 
    return res.sendStatus(202);
  });
};