"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const express_1 = __importDefault(require("express"));
const sqlite3_1 = require("sqlite3");
const app = (0, express_1.default)();
const PORT = 3000;
const db = new sqlite3_1.Database('base_datos.db');
// Handling GET / Request
app.get('', (_, res) => {
    res.send(db.get('SELECT ALL() % 100 as result'));
});
app.post('/:nick/:email/:passw/:nump', (req, res) => {
    db.exec('SELECT nick FROM users INSERT ' + req.params.nick);
    db.exec('SELECT email FROM users INSERT ' + req.params.email);
    db.exec('SELECT password FROM users INSERT ' + req.params.passw);
    db.exec('SELECT numphone FROM users INSERT ' + req.params.nump);
    res.send(db.get("SELECT FROM users  WHERE email = " + req.params.email));
});
app.delete('/:id', (req, res) => {
    db.exec('DELETE FROM users WHERE ' + req.params.id + '=?');
    return;
});
app.put('/', (req, res) => {
    //db.exec('UPDATE users SET ')
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
