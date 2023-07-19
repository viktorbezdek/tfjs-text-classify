const tf = require('@tensorflow/tfjs');
const natural = require('natural');
const _ = require('lodash');
const { corpus } = require('./corpus');
require('@tensorflow/tfjs-node');

// Create a tokenizer
const tokenizer = new natural.WordTokenizer();

// Build a vocabulary from your corpus
let vocabulary = new Set();
corpus.forEach(item => {
    const tokens = tokenizer.tokenize(item.text);
    tokens.forEach(token => vocabulary.add(token.toLowerCase()));
});
vocabulary = Array.from(vocabulary);

// Function to convert text to tensor
function textToTensor(text) {
    const tokens = tokenizer.tokenize(text);
    const vector = new Array(vocabulary.length).fill(0);
    tokens.forEach(token => {
        const index = vocabulary.indexOf(token.toLowerCase());
        if (index !== -1) vector[index]++;
    });

    // Convert to tensor
    const tensor = tf.tensor(vector, [1, vector.length]);
    return tensor;
}

module.exports = {
    textToTensor
}