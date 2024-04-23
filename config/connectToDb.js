//Responsible for connecting the Mongose datbase to the express server Application

const mongoose = require('mongoose')

const connectToDb = async() =>{
    await mongoose.connect(process.env.DB_URL)
//----> This is how the app connects to our database
console.log("Currently Connected to MongoDB Cluster")

}

module.exports = connectToDb