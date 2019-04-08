const request = require('request');

const api = function(req, res, next) {
	let id = req.query.id;
	let sheet = req.query.sheet || 1;
	let query = req.query.q || '';
	let useInt = req.query.int || true;
	let showRows = req.query.rows || true;
	let showColumns = req.query.columns || true;
	let url = `https://spreadsheets.google.com/feeds/list/${id}/${sheet}/public/values?alt=json`;

	request(url, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			let data = JSON.parse(response.body);
			let Obj = {};
			let rows = [];
			let columns = {};

			for (const entry of data.feed.entry.values()) {
				let keys = Object.keys(entry);
				let newRow = {};
				let queried = false;

				for (const key of keys.values()) {
					let gsx = key.indexOf('gsx$');
					if (gsx > -1) {
						let name = key.substring(4);
						let content = entry[key];
						let value = content.$t;

						if (value.toLowerCase().indexOf(query.toLowerCase()) > -1) {
							queried = true;
						}

						if (useInt === true && !isNaN(value)) {
							value = Number(value);
						}

						newRow[name] = value;

						if (queried === true) {
							if (!columns.hasOwnProperty(name)) {
								columns[name] = [];
								columns[name].push(value);
							} else {
								columns[name].push(value);
							}
						}
					}
				}

				if (queried === true) {
					rows.push(newRow);
				}
			}

			if (showColumns === true) {
				Obj.columns = columns;
			}

			if (showRows === true) {
				Obj.rows = rows;
			}

			return res.status(200).json(Obj);
		}
		return res.status(response.statusCode).json(error);
	});
};

module.exports = api;
