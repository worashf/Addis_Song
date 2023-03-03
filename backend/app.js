const express = require("express")
const cors = require("cors")
const songRoutes  = require("./routes/songRoute")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Song routes
app.use("/api/v1", songRoutes)

module.exports = app