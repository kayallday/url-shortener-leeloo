const url = require('../../models/url.js')
const utilityDebugTool = require('utility_debug_tool')

module.exports = (express) => {
  const router = express.Router();

  router.get('/urls', (req, res) => {
    res.json({
      healthy: true,
    })
  });

  //create
  router.post('/urls', (req, res) => {
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    };
  });

  //ALL urls
  router.get('/urls', (req, res) => {
    url.findAll(((err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    });
  });

  // Uno urls
  router.get('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    });
  });

  // Delete urls
  router.delete('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    });
  });

  // Update
  router.post('/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }), (data) => {
      res.status(200).json(data);
    });
  });

  return router;
}
