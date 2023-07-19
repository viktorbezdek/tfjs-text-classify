const companies = require('./companies.json');
const roles = require('./roles.json');
let corpus = [
    ...companies.map(company => ({ text: company, label: 'company' })),
    ...roles.map(role => ({ text: role, label: 'role' }))
];

module.exports = {
    corpus
}