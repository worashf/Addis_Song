const dotenv  = require("dotenv")
const app  = require("./app")
const dbConnection  = require("./configs/dbConnect")



dotenv.config({ path: 'backend/configs/config.env' });


// connect to the database
dbConnection()

// create express  server app
const server  = app.listen(process.env.PORT, ()=>{
    console.log(`Application started at ${process.env.PORT}`)
})