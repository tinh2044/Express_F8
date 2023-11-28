const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')

const app = express()
const PORT = 3000

// Create partials




// HTTP Logger
app.use(morgan('combined'))

// Template Engine
app.engine('.hbs', handlebars.engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, '/resources/views'))


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/news', (req, res) => {
    res.render('news')
})
app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} `))
