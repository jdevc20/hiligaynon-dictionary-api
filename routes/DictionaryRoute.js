const express = require('express');
const router = express.Router();
const DictionaryController = require('../controllers/DictionaryController');

const dictionaryController = new DictionaryController();

/**
 * @route POST /words
 * @description Create a new word entry
 * @access Public
 * @body {Object} wordData - Data for the new word entry
 */
router.post('/words', dictionaryController.createWord);

/**
 * @route GET /words/:id
 * @description Get a word entry by its ID
 * @access Public
 * @param {String} id - The ID of the word to retrieve
 */
router.get('/words/:id', dictionaryController.getWordById);

/**
 * @route PUT /words/:id
 * @description Update a word entry by its ID
 * @access Public
 * @param {String} id - The ID of the word to update
 * @body {Object} wordData - Updated data for the word entry
 */
router.put('/words/:id', dictionaryController.updateWord);

/**
 * @route DELETE /words/:id
 * @description Delete a word entry by its ID
 * @access Public
 * @param {String} id - The ID of the word to delete
 */
router.delete('/words/:id', dictionaryController.deleteWord);

/**
 * @route GET /words
 * @description Retrieve all words, optionally filtered by the starting letter
 * @access Public
 * @query {String} letter - The starting letter to filter words (optional)
 */
router.get('/words', dictionaryController.getAllWords);

/**
 * @route GET /words/search
 * @description Search for words based on a query
 * @access Public
 * @query {String} query - The search query to find matching words
 */
router.get('/words/search', dictionaryController.searchWords);

/**
 * @route GET /words/by-word
 * @description Get word entries that match a given word string
 * @access Public
 * @query {String} word - The word string to search for
 */
router.get('/words/by-word', dictionaryController.getWordsByWord);

module.exports = router;
