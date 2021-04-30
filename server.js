const express = require('express')
const bodyParser = require('body-parser')
const router = require('./network/routes')
const cors = require('cors')
const db = require('./db')
const morgan = require('morgan');
var app = express();

/**
 * Database connection
 */
db("mongodb+srv://admin:Manrique425@clustertest.67igu.mongodb.net/test")

/**
 * Settings
*/
app.set('port', process.env.PORT || 3000)
app.use(morgan('dev'))
// para pasar data desde un fichero json por el lado del cliente
app.use(bodyParser.json())
// para pasar data desde un formulario por el lado del cliente
app.use(bodyParser.urlencoded({extended: false}))

/**
 * Public
*/
app.use('/app', express.static('public'))

/**
 * Routes
*/
//middleware
router(app);

app.use(cors())

/**
 * Listening
 */
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`)
})


