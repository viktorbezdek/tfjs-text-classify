const { sample } = require("lodash");
const companies = require("./data/companies.json");
const roles = require("./data/roles.json");
const { classifyText } = require("./lib/classify");

const samples = Array.from({ length: 10 }).map((_, index) =>
	index % 2 === 0 ? sample(companies) : sample(roles),
);

samples.forEach((text) =>
	classifyText(text)
		.then((label) => console.log(`${text}: ${label}`))
		.catch((err) => console.error(err)),
);
