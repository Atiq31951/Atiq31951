const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const hbs = require('express-handlebars')
const {
	DBInfo: { MongoURI },
	PORTInfo: { port }
} = require('./configs/keys')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

// Mongoose to connect mogo-db
mongoose.connect(MongoURI, { useNewUrlParser: true })
.then(() => console.log('DB Connected'))
.catch(error => console.error(error))

// Template Engine Conf
app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine', 'handlebars')


// Routes
app.use('/', (req, res) => {
    res.render('default/index')
})

app.listen(port, () => {
    console.log(`Port ${port} is stared to serve`)
})