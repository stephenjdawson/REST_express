"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");

const jsonParser = require("body-parser").json;
const logger = require("morgan");

app.use(logger("dev"));
app.use(jsonParser());

app.use("/questions", routes);

// catch 404 and forward to error handler
app.use(function(req, res, next){
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});
//error handler
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        error: {
           message: err.message
        }
    });
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
  console.log("Server started on port " + port);
});
