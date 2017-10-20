"use strict";

const express = require("express");
const router = express.Router();

//GET /questions
// Return all the questions
router.get("/", function(req, res){
    res.json({response: "You sent me a GET request"});
});

//POST /questions
// Return all the questions
router.post("/", function(req, res){
    res.json({
      response: "You sent me a POST request",
      body: req.body
    });
});


//GET /questions/:qID
// Return all the questions
router.get("/:qID", function(req, res){
    res.json({
        response: "You sent me a GET request for ID " + req.params.qID
      });
});



//POST /questions/:qID/answers
// route for creating an answer
router.post("/:qID/answers", function(req, res){
    res.json({
      response: "You sent me a POST request to /answers",
      questionId: req.params.qID,
      body: req.body
    });
});

//PUT /questions/:qID/answers/:aID
// edit a specific answer
router.put("/:qID/answers/:aID", function(req, res){
    res.json({
      response: "You sent me a PUT request to /answers",
      questionId: req.params.qID,
      answerId: req.params.aID,
      body: req.body
    });
});

//DELETE /questions/:qID/answers/:aID
// Delete a specific answer
router.delete("/:qID/answers/:aID", function(req, res){
    res.json({
      response: "You sent me a DELETE request to /answers",
      questionId: req.params.qID,
      answerId: req.params.aID,
    });
});

//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
// vote on a specific answer
router.post("/:qID/answers/:aID/vote-:ud", function(req, res, next){
      if(req.params.ud.search(/^(up|down)$/) === -1){
          var err = new Error("Not Found");
          err.status = 404;
          next(err);
      } else {
          next();
      }
  },function(req, res){
      res.json({
        response: "You sent me a POST request to /vote" + req.params.ud,
        questionId: req.params.qID,
        answerId: req.params.aID,
        vote: req.params.ud
      });
});


module.exports = router;
