

var mongoose = require('mongoose')
  , BlogPost  = mongoose.model('BlogPost')

// new blogpost 
exports.new = function(req, res){
  res.render('articles/new', {
      title: 'New Article'
    , article: new Article({})
  })
}


// Create an article
exports.create = function (req, res) {
  var article = new Article(req.body)
  article.user = req.user

  
    article.save(function(err){
      if (err) {
        res.render('articles/new', {
            title: 'New Article'
          , article: article
          , errors: err.errors
        })
      }
      else {
        res.redirect('/articles/'+article._id)
      }
    })
  }, 'article')
}
