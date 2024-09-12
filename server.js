import express from 'express'
import dotenv from 'dotenv/config'

import getURL from "./getURL";

import date from "./date";

import viewEnine from "./viewEngine";


const app = express()
const port = process.env.PORT
viewEnine(app)

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

app.get('/ejs', (req, res) => {
    res.render("test")
})

app.get('/', (req, res) => {
    res.render("home")
})

app.get('/about', (req, res) => {
    res.render("about")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})