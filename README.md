# Mern-Testing-Project
# Modules => express
#         => dotenv
#         => nodemon
#         => mongoose
#         =>
#         =>
#         =>
#         =>
#         =>
#         =>

# Connect to MongoDB using mongoose

# Use Function => http://expressjs.com/en/4x/api.html#app.use

# Q1. How to get env file path?
# Q2. How to configration routes?
# Q3. How to connect MongoDB?


# Ans1. => Import dotenv , dotenv.config({ path: "backend/config/config.env" })

# Ans2. => Import Router:
#       => const router = express.Router();
#       => use router's router function for routes  
#       => router.route("/random round text").get( function )  

# Ans3. => Import mongoose
#       =>  mongoose
#       =>    .connect(process.env.DB_URI, {
#       =>      useNewUrlParser: true,
#       =>      useUnifiedTopology: true,
#       =>      useCreateIndex: true,
#       =>    })
#       =>    .then((data) => {
#       =>      console.log(`Mongodb connected with server : ${data.connection.host}`);
#       =>    })
#       =>    .catch((err) => {
#       =>      console.log(err);
#       =>    });