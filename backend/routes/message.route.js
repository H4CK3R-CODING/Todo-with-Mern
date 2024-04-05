import express from "express"
import sendMessage from "../controllers/message.controller.js";
import getAllTodo from "../controllers/getAllTodo.js";
import editMessage from "../controllers/editMessage.js";
import delEdit from "../controllers/delEdit.js";

const router = express.Router()

router.get("/getTodo", getAllTodo);
router.post("/edit/:id", editMessage);
router.delete("/del/:id", delEdit);
router.post("/sendMessage", sendMessage);

export default router;