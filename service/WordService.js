const { Word } = require('../models/Word'); // Adjust the path to your Word model

class WordService {
    async createWord(wordData) {
        try {
            const newWord = new Word(wordData);
            const savedWord = await newWord.save();
            return savedWord;
        } catch (error) {
            console.error(`Error in createWord: ${error.message}`);
            throw error;
        }
    }

    async getWordById(wordId) {
        try {
            const word = await Word.findById(wordId);
            if (!word) {
                throw new Error('Word not found');
            }
            return word;
        } catch (error) {
            console.error(`Error in getWordById: ${error.message}`);
            throw error;
        }
    }

    async updateWord(wordId, wordData) {
        try {
            const updatedWord = await Word.findByIdAndUpdate(wordId, wordData, { new: true });
            if (!updatedWord) {
                throw new Error('Word not found');
            }
            return updatedWord;
        } catch (error) {
            console.error(`Error in updateWord: ${error.message}`);
            throw error;
        }
    }

    async deleteWord(wordId) {
        try {
            const deletedWord = await Word.findByIdAndDelete(wordId);
            if (!deletedWord) {
                throw new Error('Word not found');
            }
        } catch (error) {
            console.error(`Error in deleteWord: ${error.message}`);
            throw error;
        }
    }

    async searchWords(query) {
        try {
            if (query.length < 2) {
                throw new Error('Query must be at least 2 characters long');
            }

            const normalizedQuery = WordService.normalizeString(query);
            console.log(`Normalized query: ${normalizedQuery}`); // Debugging line
            const regex = new RegExp(normalizedQuery, 'i'); // Create case-insensitive regex
            console.log(`Regex: ${regex}`); // Debugging line

            // Perform search using regex
            const results = await Word.find({ word: { $regex: regex } });
            console.log(`Results: ${JSON.stringify(results)}`); // Debugging line

            return results;
        } catch (error) {
            console.error(`Error in searchWords: ${error.message}`);
            throw new Error(`Error while searching words: ${error.message}`);
        }
    }

    static normalizeString(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
    }

    async getAllWords(letter) {
        try {
            const query = letter ? { word: new RegExp(`^${letter}`, 'i') } : {};
            console.log(`Constructed query: ${JSON.stringify(query)}`); // Debugging line
            const words = await Word.find(query, 'word wordType');
            console.log(`Retrieved words: ${JSON.stringify(words)}`); // Debugging line
            return words;
        } catch (error) {
            console.error(`Error in getAllWords: ${error.message}`);
            throw error;
        }
    }

    async getWordsByWord(_word) {
        try {
            const words = await Word.find({ $text: { $search: _word, $diacriticSensitive: false, $caseSensitive: false } });
            return words;
        } catch (error) {
            console.error(`Error in getWordsByWord: ${error.message}`);
            throw error;
        }
    }
}

module.exports = WordService;
