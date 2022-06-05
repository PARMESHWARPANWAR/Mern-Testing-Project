const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");

// env.Path("./backend/config"); // not remembering
dotenv.config({ path: "backend/config/config.env" })


//Connecting to database
connectDatabase();

app.listen(process.env.PORT, (req,res)=>{
    console.log(`Listening on port ${process.env.PORT}`)
})