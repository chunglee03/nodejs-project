require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT 
const webRoutes = require('./routes/web') // vi ben web.js chi xuat ra 1 bien la router cho nen ben nay co the dat ten gi cung duoc (webRoutes se luon mapping voi routernpm )
const viewEngine = require('./config/viewEngine')

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data
//khai bao View Engine
viewEngine(app)
//Khai bao route
app.use('', webRoutes) // '' co nghia tat ca cac route ma ta khai bao dung sau duong link ''

app.listen(port, () => {
  console.log(`localhost:${port}`)
})