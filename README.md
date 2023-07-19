# Text Classifier

This is a simple Node.js project that demonstrates how to use TFJS to classify text as either a company or a job role.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/text-classifier.git
```

2. Install the dependencies:

```bash
cd text-classifier
npm install
```

## Usage

To run the text classifier, execute the following command:

```bash
node index.js

# Output:
# --------------------
# Wix: company
# Tax Consultant: role
# McDonald"s: company
# Tourism Consultant: role
# Toppan Printing: company
# SK Hynix: company
# Cybersecurity Analyst: role
# Animal Behaviorist: role
# SAP: company
# Clinical Psychologist: role
```

This will generate 10 random samples of text and classify each sample as either a company or a role using the pretrained model. The results will be printed to the console.

## Training

To train the model, execute the following command:

```bash
node train.js
```

This will train the model using the data in the `data` directory. The model will be saved to the `model` directory.