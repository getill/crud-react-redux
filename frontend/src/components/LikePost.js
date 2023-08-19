import axios from "axios";
import React, { useEffect, useState } from "react";

const LikePost = ({ post, userId }) => {
  const [userLiked, setUserLIked] = useState(false);

  useEffect(() => {
    if (post.likers) {
      if (post.likers.includes(userId)) {
        setUserLIked(true);
      } else {
        setUserLIked(false);
      }
    }
  }, [userId]);

  const likePost = () => {
    axios.patch("http://localhost:5000/post/like-post/" + post._id, { userId });

    setUserLIked(true);
  };
  const dislikePost = () => {
    axios.patch("http://localhost:5000/post/dislike-post/" + post._id, {
      userId,
    });
    setUserLIked(false);
  };

  return (
    <div className="like-icon">
      <p>{post.likers ? post.likers.length : 0}</p>
      {userLiked ? (
        <span id="like-btn" onClick={() => dislikePost()}>
          &#9829;
        </span>
      ) : (
        <span id="dislike-btn" onClick={() => likePost()}>
          &#9829;
        </span>
      )}
    </div>
  );
};

export default LikePost;
