
const express = require("express");
const cors = require("cors");
const ejs = require("ejs");
const userRouter = require("./routes/user");
const session = require('express-session');
const passport = require("passport");
const MongoStore = require('connect-mongo');
const app = express();
require("./config/databases");
require("dotenv").config();
require("./config/passport");


app.set("view engine", "ejs");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//express session
app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
  mongoUrl:process.env.DB_URL,
  collectionName:"sessions"
  })
  //cookie: { secure: true }
})
);
app.use(passport.initialize());
app.use(passport.session());



app.get("/",(req, res)=>{
    res.render("index")
});

app.use(userRouter);
// app.post(
//     "/login",
//     passport.authenticate("local",{
//         failureRedirect:"/login",
//         successRedirect:"/profile",
//     })
// );
app.use((req, res, next)=>{
    res.status(404).json({
        message:"invalid route"
    });
});

app.use((err, req, res, next)=>{
    res.status(500).json({
        message:err.message
    });
});

module.exports = app;