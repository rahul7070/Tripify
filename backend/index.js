const express = require("express");
const { connection } = require("./db");
const cors = require("cors")
const { auth } = require("./middlewares/auth.middleware");
const { packageRouter } = require("./routes/package.route");
const { picsRouter } = require("./routes/pics.route");
const { userRouter } = require("./routes/user.route");
require("dotenv").config()

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world")
})

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)
app.use("/packages", packageRouter)
app.use("/pics", picsRouter)

app.listen(process.env.port, ()=>{
    try {
        connection
        console.log("connection established")
        console.log(`running on port ${process.env.port}`)
    } catch (error) {
        console.log(error)
    }
})
