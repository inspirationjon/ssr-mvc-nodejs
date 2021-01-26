const path = require('path');

const GET = (req, res) => {
	res.sendFile(path.join(__dirname, '../views', 'about.html'));
};

module.exports.GET = GET;
