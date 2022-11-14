// Importing module
import express from 'express';
import { Database } from 'sqlite3';

const app = express();
const PORT:Number=3000;

const db = new Database('db.dataBase');


// Handling GET / Request
app.get('/', (req, res) => {
	db.get('SELECT ALL() % 100 as result', (_, res) => console.log(res)
	);	
})

app.post('/:nick/ :email/ :passw/ :nump', (req, res) => {
	db.exec('SELECT nick FROM users INSERT ' + req.params.nick);	
	db.exec('SELECT email FROM users INSERT ' + req.params.email);
	db.exec('SELECT password FROM users INSERT ' + req.params.passw);
	db.exec('SELECT numphone FROM users INSERT ' + req.params.nump)
})

app.delete('/:id', (req, res) => {
	
})

app.put('/', (req, res) => {
	
})

// Server setup
app.listen(PORT,() => {
	console.log('The application is listening '
		+ 'on port http://localhost:'+PORT);
})
