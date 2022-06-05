const express = require("express");
const app = express();

//Can't Remember Routers code
app.use(express.json());

//Can't Remember Routers code
const products = require("./routes/productRoutes");

// app.get("/", (req, res) => {
//     res.send("Hello Working");
// })

app.use("/app",products);

module.exports = app;