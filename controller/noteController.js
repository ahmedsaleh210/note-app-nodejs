import generator from "../utils/generators.js";
import * as memStorage from "../utils/memory.storage.js";
import { Note } from "../models/note.model.js";

export function getAllNotes(req, res) {
  const values = memStorage.getValues(memStorage.store);
  res.status(200).json(values);
}


export function saveNote(req, res) {
    const seqId = generator.generate();
    const { title, content } = req.body;
    const createdAt = new Date();
    const createdBy = "admin";
  
    if (!title || !content) {
      return res.status(400).send("Title and content must not be empty");
    }
  
    const noteModel = new Note(seqId, title, content, createdBy, createdAt);
  
    try {
      memStorage.store.setItem(seqId, noteModel);
      res.status(201).send("Note saved successfully");
    } catch (error) {
      res.status(500).send("An error occurred while saving the note");
    }
  }
  

  export function updateNote(req, res) {
    const { noteId, title, content } = req.body;
    const createdAt = new Date();
    const createdBy = "admin";
  
    if (!title || !content || !noteId) {
      return res.status(400).send("Title, content, and id must not be empty");
    }
  
    const noteItem = memStorage.store.getItem(noteId);
    if (!noteItem) {
      return res.status(400).send("Note ID does not exist");
    }
  
    const noteModel = new Note(noteId, title, content, createdBy, createdAt);
  
    try {
      memStorage.store.setItem(noteId, noteModel);
      res.status(200).send("Note updated successfully");
    } catch (error) {
      res.status(500).send("An error occurred while updating the note");
    }
  }

export function deleteNote(req, res) {
  const noteId = req.params.noteId;
  const noteItem = memStorage.store.getItem(noteId);

  if (!noteItem) {
    return res.status(400).send("Note ID does not exist");
  }

  try {
    memStorage.store.removeItem(noteId);
    res.status(200).send("Note removed successfully");
  } catch (error) {
    res.status(500).send("An error occurred while removing the note");
  }
}
