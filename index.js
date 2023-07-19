const { sample } = require("lodash");
const companies = require("./companies.json");
const roles = require("./roles.json");
const { classifyText } = require("./classify");

const samples = Array.from({ length: 10 }).map((_, index) =>
	index % 2 === 0 ? sample(companies) : sample(roles),
);

samples.forEach((text) =>
	classifyText(text)
		.then((label) => console.log(`${text}: ${label}`))
		.catch((err) => console.error(err)),
);
