let mongoose = require('mongoose'),
Blogs = mongoose.model('Blogs');

exports.findAll = function(req, res){
  Blogs.find({},function(err, results) {
    return res.sendStatus(results);
  });
};

exports.findById = function(req, res){
  let id = req.params.id;
  Blogs.findOne({'_id':id},function(err, result) {
    return res.sendStatus(result);
  });
};

exports.update = function(req, res) {
  let id = req.params.id;
  let updates = req.body;

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
  let id = req.params.id;
  Blogs.remove({'_id':id},function(result) {
    return res.sendStatus(result);
  });
};

exports.import = function(req, res){
  Blogs.create( 
    { "name": "First Blog Article", "brief": "Bla bla bla"},
    { "name": "Second Blog Article","brief": "Second article will tell you about something interesting"},
    { "name": "About migration", "brief": "In this article I'll tell you about migration to another country"},
    { "name": "About current situation in Madrid", "brief": "The weather in Madrid is very hot now"}             
  , function (err) {
    if (err) return console.log(err); 
    return res.sendStatus(202);
  });
};