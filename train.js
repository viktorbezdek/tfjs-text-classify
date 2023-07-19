const tf = require("@tensorflow/tfjs");
const { textToTensor } = require("./lib/text-to-tensor");
const { corpus } = require("./lib/corpus");
require("@tensorflow/tfjs-node");

(async () => {
	// Convert your data to tensors
	const trainingData = tf.tensor2d(
		corpus
			.map((item) => textToTensor(item.text))
			.map((tensor) => tensor.dataSync()),
	);
	const trainingLabels = tf.tensor2d(
		corpus.map((item) => (item.label === "role" ? [1, 0] : [0, 1])),
	);

	trainingData.print();

	// Create a simple sequential model
	const model = tf.sequential();
	model.add(tf.layers.dense({ units: 32, inputShape: [797] }));
	model.add(tf.layers.dense({ units: 16, activation: "relu" }));
	model.add(tf.layers.dense({ units: 2, activation: "softmax" }));
	model.compile({ loss: "categoricalCrossentropy", optimizer: "sgd" });

	// Train the model
	await model.fit(trainingData, trainingLabels, { epochs: 1000 });
})();
