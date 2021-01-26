const { date } = require('../models/data.js');

const GET = (_, res) => {
	res.send(`<h1>${date}</h1>`);
};

module.exports.GET = GET;
