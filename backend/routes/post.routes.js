const express = require("express");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
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

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké id : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké id : " + req.params.id });
});

module.exports = router;
