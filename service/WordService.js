const { Word } = require('../models/Word'); // Assuming your model file is named wordModel.js

class WordService {
    async createWord(wordData) {
        try {
            const newWord = new Word(wordData);
            const savedWord = await newWord.save();
            return savedWord;
        } catch (error) {
            throw error;
        }
    }

    async getWordById(wordId) {
        try {
            const word = await Word.findById(wordId);
            return word;
        } catch (error) {
            throw error;
        }
    }

    async updateWord(wordId, wordData) {
        try {
            const updatedWord = await Word.findByIdAndUpdate(wordId, wordData, { new: true });
            return updatedWord;
        } catch (error) {
            throw error;
        }
    }

    async deleteWord(wordId) {
        try {
            await Word.findByIdAndDelete(wordId);
        } catch (error) {
            throw error;
        }
    }

    async searchWords(query) {
        try {
            // Implement your search logic here, based on your requirements
            const words = await Word.find(query);
            return words;
        } catch (error) {
            throw error;
        }
    }
    //async getAllWords() {
    //    try {
    //        const words = await Word.find();
    //        return words;
    //    } catch (error) {
    //        throw error;
    //    }
    //}
    async getAllWords(letter) {
        try {
            const query = letter ? { word: new RegExp(`^${letter}`, 'i') } : {};
            console.log(`Constructed query: ${JSON.stringify(query)}`); // Debugging line
            const words = await Word.find(query, 'word wordType');
            console.log(`Retrieved words: ${JSON.stringify(words)}`); // Debugging line
            return words;
        } catch (error) {
            console.error(`Error in getAllWords: ${error.message}`); // Debugging line
            throw error;
        }
    }


    async getWordsByWord(_word) {
        try {
            const words = await Word.find({ $text: { $search: _word, $diacriticSensitive: false, $caseSensitive: false } });
            return words;
        } catch (error) {
            throw error;
        }
    }


}

module.exports = WordService;
