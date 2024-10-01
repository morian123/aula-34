const express = require("express")

const incritosController = require("../controllers/incritosController");

const router = express.Router();

router.get("/", incritosController.index);

router.get("/", incritosController.show);

router.post("/", incritosController.store);

router.put("/", incritosController.update);

router.delete("/", incritosController.delete)

module.exports = router;