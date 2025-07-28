const express = require("express")
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/alunos", studentController.getAll);
router.get("/alunos/:id", studentController.getById);
router.post("/alunos", studentController.create);
router.put("/alunos/:id", studentController.update);
router.delete("/alunos/:id", studentController.remove);

module.exports = router;