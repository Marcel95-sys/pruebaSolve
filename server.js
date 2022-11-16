"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing module
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const sqlite3_1 = require("sqlite3");
const app = (0, express_1.default)();
const PORT = 3000;
const db = new sqlite3_1.Database('base_datos.db');
app.use(cors_1.default);
app.use(express_1.default.json);
// Handling GET / Request
app.get('/', (_, res) => {
    res.send(db.get('SELECT * FROM users'));
});
app.post('/', (_, res) => {
    db.exec("INSERT INTO users (nick, email, passw, numphone) VALUES ('"
        + body_parser_1.json.arguments.nick + "','" + body_parser_1.json.arguments.email + "','"
        + body_parser_1.json.arguments.passw + "','" + body_parser_1.json.arguments.numphone + "');");
    res.send("Se ha creado el usuario " + body_parser_1.json.arguments.nick);
});
app.delete('/:id', (req) => {
    db.exec('DELETE FROM users WHERE id = ' + req.params.id);
    return;
});
app.put('/:option', (req, res) => {
    if (req.params.option == "nick") {
        db.exec('UPDATE users SET nick = "' + body_parser_1.json.arguments.nick + '"');
    }
    else if (req.params.option == "email") {
        db.exec('UPDATE users SET email = "' + body_parser_1.json.arguments.email + '"');
    }
    else if (req.params.option == "passw") {
        db.exec('UPDATE users SET passw = "' + body_parser_1.json.arguments.passw + '"');
    }
    else if (req.params.option == "num") {
        db.exec('UPDATE users SET email = "' + body_parser_1.json.arguments.email + '"');
    }
});
// Server setup
app.listen(PORT, () => {
    console.log('The application is listening '
        + 'on port http://localhost:' + PORT);
});
