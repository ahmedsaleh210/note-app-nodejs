import express from "express";
import * as noteController from "../controller/noteController.js";
const router = express.Router();

router.get("/notes", noteController.getAllNotes);
router.post("/notes/save", noteController.saveNote);
router.put("/notes/update", noteController.updateNote);
router.delete("/notes/delete/:noteId", noteController.deleteNote);

export default router;
