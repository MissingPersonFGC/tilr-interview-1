const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const morgan = require('morgan')
const routes = require('./routes')
const cors = require('cors')

const app = express()
app.use(morgan('combined'))
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json())
app.use(routes)

app.get('/', function (req, res) {
  console.log('Cookies: ', req.cookies)
})

const server = app.listen(8000, () => {
  console.log('Server running on 8000!')
})

module.exports = server
