const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')
const port = process.env.PORT || 8000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


app.use('/api/pets', require('./routes/petRoutes'))
app.use('/api/pets/:petID/todos', require('./routes/todoRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
