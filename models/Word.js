const mongoose = require('mongoose');

// Word Schema
const wordSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
        unique: true
    },
    // New spelling field to handle multiple spellings
    spelling: [{
        type: String
    }],
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
    // Renamed furtherDetails to details
    details: String,
    etymology: {
        type: String
    },
    // Updated derivedWords structure
    derivedWords: [{
        _id: { type: mongoose.Schema.Types.ObjectId, ref: 'Word' },
        word: { type: String, required: true },
        definition: { type: String, required: true },
        usage_example: { type: String }
    }],
    // Related words reference
    relatedWords: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Word' }],
    isChecked: {
        type: Boolean,
        default: false
    }
});

wordSchema.index({ word: 'text' });

const Word = mongoose.model('Word', wordSchema);
module.exports = { Word };
