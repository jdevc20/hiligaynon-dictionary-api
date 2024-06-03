const express = require('express');
const router = express.Router();
const DictionaryController = require('../controllers/DictionaryController');

const dictionaryController = new DictionaryController();

// Routes
router.post('/words', dictionaryController.createWord);
router.get('/words/by-id/:id', dictionaryController.getWordById); // Route to get word by ID
router.put('/words/:id', dictionaryController.updateWord);
router.delete('/words/:id', dictionaryController.deleteWord);
router.get('/words', dictionaryController.getAllWords); // Route to get all words
router.get('/search', dictionaryController.searchWords); // Route to search words
router.get('/words/by-word/:word', dictionaryController.getWordsByWord); // Route to get words by word string

module.exports = router;
