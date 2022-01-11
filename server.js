if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRouter = require('./routes/userRouter')

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname + '/public'))
app.use(cookieParser())
app.use(cors())

// Routes
app.use('/user', userRouter)


const port = process.env.PORT
app.listen(port, () => console.log(`Server listening on port: ${port}`))