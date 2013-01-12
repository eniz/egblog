
/**
 * Module dependencies.
 */

var express = require('express')
  , mongoose = require('mongoose');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
app.use(express.compiler({ src : __dirname + '/public', enable: ['less']}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Compatible

// Now less files with @import 'whatever.less' will work(https://github.com/senchalabs/connect/pull/174)
var TWITTER_BOOTSTRAP_PATH = './vendor/twitter/bootstrap/less';
express.compiler.compilers.less.compile = function(str, fn){
  try {
    var less = require('less');var parser = new less.Parser({paths: [TWITTER_BOOTSTRAP_PATH]});
    parser.parse(str, function(err, root){fn(err, root.toCSS());});
  } catch (err) {fn(err);}
}

// Static Page Routes
app.get('/', function(req, res){ res.render('index', { title: 'Home' }) });
app.get('/projects', function(req, res){ res.render('projects', {title: 'Projects'}) });
app.get('/about', function(req, res){ res.render('about', {title: 'About Me'}) });
app.get('/contact', function(req, res){ res.render('contact', {title: 'Contact', email:"enizgulek@gmail.com", phone:"+905545400260" }) });


// Dinamic Page Routes
// Login Routes
//app.get ('/admin/login', function(req, res) { admin.pageLogin(req, res); } );
//app.post('/admin/login', function(req, res) { admin.pageLoginPost(req, res); }  );
//app.get ('/admin/logout', function(req, res) { admin.pageLogout(req, res); }  );
// post related
//app.get ('/admin/postlist', function(req, res) { admin.pagePostList(req, res); }  );
//app.get ('/admin/newPost', function(req, res) { admin.pagePost(req, res); }  );
//app.post('/admin/post', function(req, res) { amin.pagePostPost(req, res); }  );
//app.get ('/admin/post/:id', function(req, res) { admin.pagePost(req, res); }  );
// misc.
//app.get ('/admin', function(req, res) { base.pageIndex(req, res); } );

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
