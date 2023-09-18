const express= require("express")
const router = express.Router()


const { dummyLink } = require("../controller/likeController");

router.get("/dummyLink" , dummyLink);

module.exports = router;