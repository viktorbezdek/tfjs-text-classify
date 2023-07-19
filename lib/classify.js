const tf = require('@tensorflow/tfjs');
const { textToTensor } = require('./text-to-tensor');
require('@tensorflow/tfjs-node');

const modelPath = 'file://./model/model.json';

// Function to classify text
async function classifyText(text) {
    // Load the model
    const model = await tf.loadLayersModel(modelPath);

    const textTensor = tf.tensor(textToTensor(text).dataSync(), [1, 797]);

    // Predict the label
    const prediction = model.predict(textTensor);
    const labelIndex = prediction.argMax(-1).dataSync()[0];

    // Map the label index to actual label
    let label;
    if(labelIndex === 0) {
        label = "role";
    } else if(labelIndex === 1) {
        label = "company";
    }

    return label;
}

module.exports = {
    classifyText
}
