const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.post('/calculate', (req, res) => {
const weight = parseFloat(req.body.weight);
const height = parseFloat(req.body.height);
const bmi = weight / (height * height);
res.send(`Your BMI is: ${bmi.toFixed(2)}`);
});
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
