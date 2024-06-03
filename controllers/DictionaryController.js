const WordService = require('../service/WordService');

const wordService = new WordService();

class DictionaryController {
    async createWord(req, res) {
        try {
            const wordData = req.body;
            const createdWord = await wordService.createWord(wordData);
            res.status(201).json(createdWord);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getWordById(req, res) {
        try {
            const wordId = req.params.id;
            const word = await wordService.getWordById(wordId);
            if (!word) {
                return res.status(404).json({ message: 'Word not found' });
            }
            res.status(200).json(word);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateWord(req, res) {
        try {
            const wordId = req.params.id;
            const wordData = req.body;
            const updatedWord = await wordService.updateWord(wordId, wordData);
            res.status(200).json(updatedWord);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteWord(req, res) {
        try {
            const wordId = req.params.id;
            await wordService.deleteWord(wordId);
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async searchWords(req, res) {
        try {
            const query = req.query;
            const words = await wordService.searchWords(query);
            res.status(200).json(words);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getAllWords(req, res) {
        try {
            const words = await wordService.getAllWords();
            res.status(200).json(words);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getWordsByWord(req, res) {
        try {
            let word = req.params.word; // Convert to lowercase and remove leading and trailing spaces
            const words = await wordService.getWordsByWord(word.toLowerCase().trim());
            if (words.length === 0) {
                return res.status(404).json({ message: 'No entries found for the given word' });
            }
            res.status(200).json(words);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = DictionaryController;
