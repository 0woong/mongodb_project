var express = require("express");
const boardController = require("../../../controllers/ssac/boardController");
const authModule = require("../../../modules/authModule");
var router = express.Router();

router.get("/", boardController.boardAll);

router.get("/:id", boardController.boardDetail);
router.post("/", authModule.loggedIn, boardController.boardPost);

router.put("/:id", authModule.loggedIn, boardController.boardUpdate);
router.delete("/:id", authModule.loggedIn, boardController.boardDelete);

module.exports = router;
