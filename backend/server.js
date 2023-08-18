const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// Connexion à la DB
connectDB();

const app = express();

// Middleware (permet de traiter les données de la request "req")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Run the server
app.listen(port, () => console.log("Server run at" + port));
