const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const router = require('./routes/router')

const app = express()
const port = 5000

// Middlewares
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

// Server Listening
app.listen(port, (err) => {
  if (err) console.log(err)
  console.log(`server started at port ${port}`)
  console.log(`app running here -> http://localhost:${port}`)
})
