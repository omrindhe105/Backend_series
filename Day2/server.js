
// server creation using http:

// const http = require("http");
// const { listeners } = require("process");

// const server = http.createServer(function(req, res){
//     res.end("Good Morning");
// })

// server.listen(3000);

// server creation using express

const express = require("express");
const app = express();


//middleware  (middleware always have three parameter request ,reaponse and next route info)
app.use(function(req,res,next){
    console.log("Hello from middleware");
    next();
})

app.get("/", function (req, res) {
    res.send("Good Morning World");
})
app.get("/home", function (req, res) {
    res.send("<h1> welcome to Home page</> ");
})
app.get("/profile", function (req, res) {
    return next(error("something happens"))
})

f
//error handler
app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500).send("<h1> Error 404 </>")
   
  }
  )

app.listen(3000)
