// Importing module
import { json } from 'body-parser';
import express from 'express';
import { Database } from 'sqlite3';

const app = express();
const PORT:Number=3000;

const db = new Database('base_datos.db');


// Handling GET / Request
app.get('', (_,res) => {
	res.send(db.get('SELECT * FROM users'));	
})

app.post('', (_, res) => {
	db.exec("INSERT INTO users (nick, email, passw, numphone) VALUES ('"
		 + json.arguments.nick + "','" + json.arguments.email + "','" 
		 +  json.arguments.passw + "','" + json.arguments.numphone + "');");

	res.send("Se ha creado el usuario " + json.arguments.nickname);
})

app.delete('/:id', (req) => {
	db.exec('DELETE FROM users WHERE id = ' + req.params.id);
	return;
})

app.put('', (req, res) => {
	//db.exec('UPDATE users SET ')
})

// Server setup
app.listen(PORT,() => {
	console.log('The application is listening '
		+ 'on port http://localhost:'+PORT);
})
