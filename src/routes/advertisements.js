const express = require("express");
const router = express.Router();

const advertisementController = require("../controllers/advertisementController")

router.get("/advertisements", advertisementController.index);

router.post("/advertisements/:id/update", advertisementController.update);

router.get("/advertisements/:id/edit", advertisementController.edit);

router.post("/advertisements/create", advertisementController.create);

router.get("/advertisements/new", advertisementController.new);

router.get("/advertisements/:id", advertisementController.show);

router.post("/advertisements/:id/destroy", advertisementController.destroy);

module.exports = router;