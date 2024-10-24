import express from 'express'
import dotenv from 'dotenv/config'
import bodyParser from 'body-parser';
import getURL from "./getURL";
// import json from 'json'
import cors from 'cors';
import date from "./date";
import path from 'path';
import viewEnine from "./viewEngine";
import webRouter from './webRoute';


const app = express()
const port = process.env.PORT
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')))
app.use(cors({origin: ['http://localhost:3000'] , optionsSuccessStatus: 200, credentials: true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
viewEnine(app)
webRouter(app)
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.get('/about', (req, res) => {
//     res.send('Hello World!. Page about')
// })

// app.get('/date', (req, res) => {
//     res.send(date());
// })

// app.get('/getURL', (req, res) => {
//     res.send(getURL.getPath(req) + "<br>")
//     // res.render(getURL.getParamsURL(req) + "<br>");
// })

// app.get('/ejs', (req, res) => {
//     res.render("test")
// })

// app.get('/', (req, res) => {
//     res.render("home")
// })

// app.get('/about', (req, res) => {
//     res.render("about")
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})