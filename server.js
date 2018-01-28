let express = require('express'),
mongoose = require('mongoose'),
fs = require('fs');

let mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
let db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

let app = express();

/*let app.configure(function(){
  
});
*/

require('./models/BlogModel');
require('./routes')(app);
app.set('view engine', 'pug');
app.listen(3001);
app.use(function(req, res, next) {
    if(req.accepts('html') && res.status(404)) {
        res.render('index.pug');
        return;
    }});
console.log('Listening on port 3001...');