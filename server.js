"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const sqlite3_1 = require("sqlite3");
const app = (0, express_1.default)();
const PORT = 3000;
const db = new sqlite3_1.Database('base_datos.db');
// Handling GET / Request
app.get('', (_, res) => {
    res.send(db.exec('SELECT * FROM users'));
});
app.post('', (_, res) => {
    db.exec("INSERT INTO users (nick, email, passw, numphone) VALUES ('"
        + body_parser_1.json.arguments.nick + "','" + body_parser_1.json.arguments.email + "','"
        + body_parser_1.json.arguments.passw + "','" + body_parser_1.json.arguments.numphone + "');");
    res.send("Se ha creado el usuario " + body_parser_1.json.arguments.nickname);
});
app.delete('/:id', (req) => {
    db.exec('DELETE FROM users WHERE id = ' + req.params.id);
    return;
});
app.put('', (req, res) => {
    //db.exec('UPDATE users SET ')
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
