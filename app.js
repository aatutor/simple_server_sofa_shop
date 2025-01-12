const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

var list = [
		{ name: 'Кожанный', price: 1000, color: 'brown', img: 'sofa2.jpg' },
		{ name: 'Мягкий', price: 500, color: 'gray', img: 'sofa1.jpg' },
	];

app.use(cors());
app.get('/', (req, res) => {
	res.json(list);
});
app.get('/filter', (req, res) => {
	res.json(list.filter((item) => RegExp(req.query.select, 'i').test(item.name)));
});
app.get('/sofa', (req, res) => {
	res.json(list.find((item) => RegExp(req.query.name, 'i').test(item.name)));
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
