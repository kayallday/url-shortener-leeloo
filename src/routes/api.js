// call express
module.exports = function (express) {
  // setup router
  const router = express.Router();
  const path = require("path");

  // url head
  router.post('/urls', function (req, res) {
    const origURL = req.body.orginalUrl;

    // source string and total chars
    const sourceString = 'ABCDEFGHIJKLMNOPQRSTUVabcdefghijklmnopqrstuvwxyz23456789';
    const totalChars = 8;

    // build upon string
    const buildUrl = '';

    for (const i = 0; i < totalChars; i++) {
      // randomly picked chars added
      buildURL += sourceString.charAt(Math.random() * sourceString.length);
    }

    // return resonse to buildUrl
    const pkgUrl = {
      origURL: origURL,
      shortURL: buildURL,
    };

    res.json(pkgUrl);
  });

  return router;
};
