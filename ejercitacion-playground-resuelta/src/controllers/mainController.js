const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const pdtosInSale = products.filter(pdto => pdto.category == 'in-sale');
const pdtosVisited = products.filter(pdto => pdto.category == 'visited');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		res.render('index', {
			pdtosInSale,
			pdtosVisited,
			thousandGenerator: toThousand
		});
	},
	detail: (req, res) => {
		let category = req.params.category;
		let pdtoID = req.params.id;
		let productFind = null;

		if (category == 'in-sale') {
			productFind = pdtosInSale.find(pdto => pdto.id == pdtoID);
		}
		
		if (category == 'visited') {
			productFind = pdtosVisited.find(pdto => pdto.id == pdtoID);
		}

		res.render('detail', {
			productFind,
			thousandGenerator: toThousand
		});
	},
};

module.exports = controller;
