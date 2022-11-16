// Importing module
import { json } from 'body-parser';
import express from 'express';
import cors from 'cors';
import { Database } from 'sqlite3';

const app = express();
const PORT:Number=3000;

const db = new Database('base_datos.db');

app.use(cors);

// Handling GET / Request
app.get('/', (_,res) => {
	res.json(db.get('SELECT * FROM users'));	
})

app.post('/', (_, res) => {
	db.exec("INSERT INTO users (nick, email, passw, numphone) VALUES ('"
		 + json.arguments.nick + "','" + json.arguments.email + "','" 
		 +  json.arguments.passw + "','" + json.arguments.numphone + "');");

	res.json("Se ha creado el usuario " + json.arguments.nick);
})

app.delete('/:id', (req) => {
	db.exec('DELETE FROM users WHERE id = ' + req.params.id);
	return;
})

app.put('/:option', (req, res) => {
	if(req.params.option == "nick"){
		db.exec('UPDATE users SET nick = "' + json.arguments.nick + '"');
	}
	else if(req.params.option == "email"){
		db.exec('UPDATE users SET email = "' + json.arguments.email + '"');
	}
	else if(req.params.option == "passw"){
		db.exec('UPDATE users SET passw = "' + json.arguments.passw + '"');
	}
	else if(req.params.option == "num"){
		db.exec('UPDATE users SET email = "' + json.arguments.email + '"');
	}	
})

// Server setup
app.listen(PORT,() => {
	console.log('The application is listening ' + 'on port http://localhost:'+PORT);
})
