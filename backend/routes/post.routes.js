const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controller");
const router = express.Router();
const port = 5000;

//-------- Logique d'un CRUD ---------//

// Récupère les données
router.get("/", getPosts);

// Publie un post
router.post("/", setPosts);

// Edition de post
router.put("/:id", editPost);

// Suppression de post
router.delete("/:id", deletePost);

// Like un post
router.patch("/like-post/:id", likePost);

// Retire le like d'un post
router.patch("/dislike-post/:id", dislikePost);

module.exports = router;
