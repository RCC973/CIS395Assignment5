console.log("in items.js");



var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://getting-mean-loc8r.herokuapp.com";
}

var _showError = function (req, res, status) {
  var title, content;
  if (status === 404) {
    title = "404, page not found";
    content = "Oh dear. Looks like we can't find this page. Sorry.";
  } else if (status === 500) {
    title = "500, internal server error";
    content = "How embarrassing. There's a problem with our server.";
  } else {
    title = status + ", something's gone wrong";
    content = "Something, somewhere, has gone just a little bit wrong.";
  }
  res.status(status);
  res.render('generic-text', {
    title : title,
    content : content
  });
};

var renderHomepage = function(req, res, responseBody){
    console.log("In renderHomepage");
  res.render('layout', { title: 'myApp'});
};


/* GET 'home' page */

module.exports.itemList = function(req, res){
    console.log("itemList");
  renderHomepage(req, res);
};


module.exports.angularApp = function(req,res){
    console.log("in AngularApp");
  renderHomepage(req,res);
};

