module.exports = function(app){

	let blogs = require('./controllers/blogs');

	app.get('/blogs', blogs.findAll); 
	app.get('/blogs/:id', blogs.findById); 
  app.put('/blogs/:id', blogs.update);
  app.post('/blogs', blogs.add);
  app.delete('/blogs/:id', blogs.delete);
	app.get('/import', blogs.import);  

	app.get('/hello', function(req, res) {
	    res.send('Hello!\n');
	});

};
