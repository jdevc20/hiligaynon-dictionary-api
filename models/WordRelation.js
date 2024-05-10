const mongoose = require('mongoose');

// WordRelations Schema
const wordRelationSchema = new mongoose.Schema({
    rootWord: { type: mongoose.Schema.Types.ObjectId, ref: 'Word' },
    derivedWord: { type: mongoose.Schema.Types.ObjectId, ref: 'Word' }
});

const WordRelation = mongoose.model('WordRelation', wordRelationSchema);

module.exports = {  WordRelation };
