const express = require ('express')
const port = process.env.PORT || 5000
const app = express()

//* Middleware *//
// Allows use of request body data
app.use(express.json())
// Provides additional terminal logging 
app.use(require('morgan')('dev'))

// Basic response handler for GET request on / route
app.get('/', (req,res) => {
    res.send('Hello World')
})

// Sets up listener on port 5000
app.listen(port, () => {
    console.log('Express server listening on port ' + port)
})