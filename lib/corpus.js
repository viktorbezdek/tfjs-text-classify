const companies = require("../data/companies.json");
const roles = require("../data/roles.json");

const corpus = [
	...companies.map((company) => ({ text: company, label: "company" })),
	...roles.map((role) => ({ text: role, label: "role" })),
];

module.exports = {
	corpus,
};
