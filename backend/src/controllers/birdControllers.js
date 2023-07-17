const models = require("../models");

const getAllBirds = (req, res) => {
  models.bird
    .findAll()
    .then(([bird]) => {
      res.status(200).send(bird);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getBirdById = (req, res) => {
  models.bird
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editBird = (req, res) => {
  const bird = req.body;
  bird.bird_id = parseInt(req.params.id, 10);
  models.bird
    .updateBird(bird)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createBird = (req, res) => {
  const bird = req.body;
  models.bird
    .addBird(bird)
    .then(([result]) => {
      res.location(`/birds/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.bird
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllBirds,
  getBirdById,
  createBird,
  editBird,
  destroy,
};
