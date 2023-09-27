const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const productRoute = require("./routes/productRoute")
const app = express()
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT
const errorMiddleware = require("./middleware/errorMiddleware")
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());
app.use("/api",productRoute)

//routes
app.get('/', (req, res) => {
    // throw new Error("Fake Error")
    res.send('Hello NODE API')
})
app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})
app.use(errorMiddleware)


//uYpzjBlW05yPPjFf
mongoose.set("strictQuery", false)
mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})