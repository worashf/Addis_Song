const express = require("express")
const cors = require("cors")

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Song routes




//Error handler middleware


module.exports = app