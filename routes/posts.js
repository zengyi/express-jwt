const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  //user info is now avaiable:
  //req.user
  //User.findbyone({_id: req.user})
  res.json({
    posts: {
      title: "my first post",
      description: "random data you shoulnt access",
    },
  });
});

module.exports = router;
