const express = require('express');
const router = express.Router();
const DictionaryController = require('../controllers/DictionaryController');

const dictionaryController = new DictionaryController();

// Routes
router.post('/words', dictionaryController.createWord);
router.get('/words/:id', dictionaryController.getWordById);
router.put('/words/:id', dictionaryController.updateWord);
router.delete('/words/:id', dictionaryController.deleteWord);
router.get('/words', dictionaryController.getAllWords); // Route to get all words
router.get('/search', dictionaryController.searchWords); // Route to search words

module.exports = router;
