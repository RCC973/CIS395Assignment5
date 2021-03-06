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

module.exports.addItem = function(req, res) {
  console.log("in Add Item/items.js");
  renderHomepage(req,res);

};

/* GET 'Add review' page */
module.exports.addReview = function(req, res){
  getLocationInfo(req, res, function(req, res, responseData) {
    renderReviewForm(req, res, responseData);
  });
};

/* POST 'Add bid' page */
module.exports.doAddBid = function(req, res){
  var requestOptions, path, itemid, postdata;
  itemid = req.params.itemid;
  path = "/api/items/" + itemid + '/bids';
  postdata = {
    username: req.body.username,
    price: req.body.price,
  };
  requestOptions = {
    url : apiOptions.server + path,
    method : "POST",
    json : postdata
  };
  if (!postdata.author || !postdata.rating || !postdata.reviewText) {
    res.redirect('/items/' + itemid + '/reviews/new?err=val');
  } else {
    request(
        requestOptions,
        function(err, response, body) {
          if (response.statusCode === 201) {
            res.redirect('/itemid/' + itemid);
          } else if (response.statusCode === 400 && body.name && body.name === "ValidationError" ) {
            res.redirect('/itemid/' + itemid + '/items');
          } else {
            console.log(body);
            _showError(req, res, response.statusCode);
          }
        }
    );
  }
};
