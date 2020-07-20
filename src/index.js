const path = require('path')
const express = require('express')
const chalk = require('chalk')

const app = express()
const publicPath = path.join(__dirname, '../public')
const port = process.env.PORT || 8080

app.use(express.static(publicPath))

app.listen(port, () => {
    console.log(`${chalk.bgGreenBright.blackBright('SUCCESS!!!')} Running on port ${port}`) // Testing
})