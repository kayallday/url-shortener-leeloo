// call express
module.exports = function (express) {
  // setup router
  var router = express.Router();
  var path = require("path");

  // url head
  router.post('/urls', function (req, res) {
    var origUrl = req.body.orginalUrl;

    // source string and total chars
    var sourceString = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz123456789';
    var totalChars = 8;

    // build upon string
    var buildUrl = '';

    for (var i = 0; i < totalChars; i++) {
      // randomly picked chars added
      buildUrl += sourceString.charAt(Math.random() * sourceString.length);
    }

    // return resonse to buildUrl
    var pkgUrl = {
      origUrl: origUrl,
      shortenedUrl: buildUrl,
    };

    res.json(pkgUrl);
  });

  return router;
}
