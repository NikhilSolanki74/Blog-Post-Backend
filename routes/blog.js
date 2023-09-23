const express= require("express")
const router = express.Router()




const {createComment} = require("../controller/commentController");
const {createPost,getAllPosts} = require("../controller/postController");
const {likePost,unlikePost} = require("../controller/likeController");

// Mapping Create
router.post("/comments/create",createComment)
router.post("/posts/create",createPost)
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost)
router.post("/likes/unlike",unlikePost)

// Export Controller
module.exports = router;