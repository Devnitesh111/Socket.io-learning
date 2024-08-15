const mongoose = require('mongoose')

async function connectToDatabase(){
    await mongoose.connect('mongodb+srv://nitesh:123@cluster0.ubuafdy.mongodb.net/?retryWrites=true&w=majority')
    console.log("Database connected")
}

module.exports = connectToDatabase