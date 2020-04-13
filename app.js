const express = require ('express')
const port = 5000
const app = express()

app.use(express.json())
app.use(require('morgan')('dev'))

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log('Express server listening on port ' + port)
})