const express = require('express');

const app = express();

app.listen(3000, () => console.log('El servidor está andando'));

app.set('view engine', 'ejs');

let products = [
	{
		id: 1,
		name: 'Zapatillas',
		price: 5678,
		image: 'http://placekitten.com/g/200/300',
		inSale: true,
	},
	{
		id: 2,
		name: 'Smart TV',
		price: 545678,
		image: 'http://placekitten.com/g/200/300',
		inSale: false,
	},
	{
		id: 3,
		name: 'Smartphone Samsung',
		price: 8678567,
		image: 'http://placekitten.com/g/200/300',
		inSale: false,
	},
];

app.get('/', (req, res) => {
	res.render('index', { 
		docente: 'Lando', 
		trajoFacturas: true,
		estudiantes: ['Anita', 'Kevin', 'Patricio'],
	});
});

app.get('/products', (req, res) => {
	res.render('products', { products: products });
});

app.get('/products/:id', (req, res) => {
	let productId = req.params.id;
	let theProduct = products.find(function (oneProduct) {
		return oneProduct.id == productId;
	})
	res.render('detail', {
		productId: productId,
		theProduct: theProduct
	});
})

