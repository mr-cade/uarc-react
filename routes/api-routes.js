var db = require("../models");
var router = require("express").Router();

  router.post("/api/members", (req , res) => {
    db.member.create(req.body)
      .then(members => {
        res.json(members);
      })
      .catch(err => {
        res.json(err);
      });
    
  });

  router.get("/api/members", function (req, res) {
    db.member.find({}).then(function (members) {
      res.json(members);
      console.log(members)
    });
  })


module.exports =  router;