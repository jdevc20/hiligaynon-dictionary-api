const mongoose = require('mongoose');

// Word Schema
const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    definition: {
        type: String,
        required: true
    },
    pronunciation: String,
    isActive: {
        type: Boolean,
        default: true
    },
    examples: [{
        example: {
            type: String,
            required: true
        },
        translation: {
            type: String,
            required: true
        }
    }],
    wordType: {
        type: String,
        enum: ['noun', 'verb', 'adjective', 'adverb', 'pronoun', 'preposition', 'conjunction', 'interjection', 'none']
    },
    furtherDetails: String,
    etymology: {
        type: String
    },
    isRootWord: {
        type: Boolean,
        default: true
    },
    derivedWords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }], // Reference to derived words
    isChecked: {
        type: Boolean,
        default: false
    }
});

wordSchema.index({ word: 'text' });

const Word = mongoose.model('Word', wordSchema);
module.exports = { Word };
