// Importing module
import express from 'express';
import { Database } from 'sqlite3';

const app = express();
const PORT:Number=3000;

const db = new Database('base_datos.db');


// Handling GET / Request
app.get('', (_,res) => {
	res.send(db.get('SELECT ALL() % 100 as result'));	
})

app.post('/:nick/:email/:passw/:nump', (req, res) => {
	db.exec('SELECT nick FROM users INSERT ' + req.params.nick);	
	db.exec('SELECT email FROM users INSERT ' + req.params.email);
	db.exec('SELECT password FROM users INSERT ' + req.params.passw);
	db.exec('SELECT numphone FROM users INSERT ' + req.params.nump);
	res.send(db.get("SELECT FROM users  WHERE email = " + req.params.email ));
})

app.delete('/:id', (req, res) => {
	db.exec('DELETE FROM users WHERE ' + req.params.id + '=?');
	return;
})

app.put('/', (req, res) => {
	//db.exec('UPDATE users SET ')
})

// Server setup
app.listen(PORT,() => {
	console.log('The application is listening '
		+ 'on port http://localhost:'+PORT);
})
