var db = require('./db');

// Create
exports.create = (payload, err, success) => {
  db.url.create(payload).then(success).catch(err);
};

// Read
exports.findAll = (err, success) => {
  db.url.findAll().then(success).catch(err);
};

exports.find = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
    // Find all in sequelize
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch(err);
};

// Update
exports.update = (payload, err, success) => {
  db.url.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

// Delete
exports.destroy = (payload, err, success) => {
  db.url.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};
