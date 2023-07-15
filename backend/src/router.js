const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const birdControllers = require("./controllers/birdControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/birds", birdControllers.getAllBirds);
router.get("/birds/:id", birdControllers.getBirdById);
router.put("/birds/:id", birdControllers.editBird);
router.post("/birds", birdControllers.createBird);
router.delete("/birds/:id", birdControllers.destroy);

module.exports = router;
