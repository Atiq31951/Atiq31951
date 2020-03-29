const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const flash = require('flash')

// Hnadlebars
const hbs = require('express-handlebars')

// DB
const mongoose = require('mongoose')
const {
    DBInfo: { MongoURI },
	PORTInfo: { port }
} = require('./configs/keys')
mongoose.connect(MongoURI, { useNewUrlParser: true })
.then(() => console.log('DB Connected'))
.catch(error => console.error(error))


//  Express functionality add
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))


// Template Engine Conf
app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine', 'handlebars')


// Routes
const defaultRoutes = require('./routes/default')
app.use('/', defaultRoutes)
// app.use('/admin', adminRoutes)

app.listen(port, () => {
    console.log(`Port ${port} is stared to serve`)
})