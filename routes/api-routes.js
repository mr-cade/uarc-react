var db = require("../models");
var router = require("express").Router();

router.post("/members", (req, res) => {
  db.member.create(req.body)
    .then(members => {
      res.json(members);
    })
    .catch(err => {
      res.json(err);
    });

});

router.get("/members", function (req, res) {
  db.member.findAll({}).then(function (members) {
    res.json(members);
    console.log(members)
  });
})


module.exports = router;