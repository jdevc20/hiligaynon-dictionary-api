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
    async getAllWords() {
        try {
            const words = await Word.find({}, 'word wordType'); // Specify the fields to include ('word', 'wordType')
            return words;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = WordService;
