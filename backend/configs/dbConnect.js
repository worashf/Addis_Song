const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect(process.env.DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((conn)=>{
        console.log(`Database connected at ${conn.connection.host} in ${conn.connection.port}`)
    })
}

module.exports = dbConnection