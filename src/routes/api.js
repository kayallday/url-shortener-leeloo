// call express
module.exports = function (express) {
  // setup router
  const router = express.Router();
  const path = require("path");

  // url head
  router.post('/urls', function (req, res) {
    const origUrl = req.body.orginalUrl;

    // source string and total chars
    const sourceString = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz123456789';
    const totalChars = 8;

    // build upon string
    const buildUrl = '';

    for (const i = 0; i < totalChars; i++) {
      // randomly picked chars added
      buildUrl += sourceString.charAt(Math.random() * sourceString.length);
    }

    // return resonse to buildUrl
    const pkgUrl = {
      origUrl: origUrl,
      shortenedUrl: buildUrl,
    };

    res.json(pkgUrl);
  });

  return router;
}
