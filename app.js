'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Stefany Yason\n')
    res.send('51017018\n')
    res.send('Sistem Informasi 17\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
