const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./utils/db.config");
const {userRouter} = require("./routes/users.routes")
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT||4000;


app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.use("/users",userRouter);

app.get("/",(req,res)=>{
    try{
        res.status(200).json({message:"Server Home Page"});
    }catch(error){
        res.status(500).json({message:error})
    }
})
app.listen(port,async()=>{
    try{
        await connection;
        console.log("server connected to database");
        console.log(`Server is running at http://localhost:${port}`);
    }catch(error){
        console.log("Error in connecting the server",error);
    }
})