require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ProductRoute = require('./route/productRoute')
const UserRoute = require('./route/userRoutes')
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("welcome to ennova technology")
})

app.use('/api/product', ProductRoute)

app.use('/api/user', UserRoute)

app.listen(process.env.PORT||5000)

async function creatConnection() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log("error", error.message);
    }

}
creatConnection() 
