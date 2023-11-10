const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('../routes/productRoute)

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Swetha')
})


mongoose.set("strictQuery", false)//if needed
mongoose.
connect('mongodb+srv://admin:swetha@atlascluster.bslzkp2.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})
   
