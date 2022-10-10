const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express()

// app.get('/', (req, res) => {
//     res.send('This is my HomePagee')
// })

app.set('view engine', 'ejs')
app.set('views', 'views')

const HomeRoute = require('./Router/homeRoute')
app.use(HomeRoute)

app.use(express.static(path.join(__dirname, 'public')))

const port = process.env.PORT || 5050
app.listen(port, error => {
    if (!error) {
        console.log(`Server is running port http://localhost:${port}`)
    } else {
        console.log('Not connected')
    }
})