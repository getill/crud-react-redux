import React, { useState } from "react";

const NewPost = ({ userId }) => {
  const [message, setMessage] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log("C'est envoyé !");
  };

  return (
    <form className="new-post-container" onSubmit={(e) => handleForm(e)}>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Quoi de neuf vieux fossile ?"
      ></textarea>
      <input type="submit" value="Envoyer" />
    </form>
  );
};

export default NewPost;
