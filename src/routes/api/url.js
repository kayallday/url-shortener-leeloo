var url = require('../../models/url.js')

module.exports = (express) => {
  var router = express.Router();

  router.get('/urls', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  // Create
  router.post('/urls', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    }
  });

  return router;
}
