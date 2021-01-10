import React, { useState } from "react";

import { ReactComponent as EnviarSvg } from "../../assets/enviar.svg";
import useFetch from "../../hooks/useFetch";
import Error from "../../components/Error";

import { COMMENT_POST } from "../../api";

import styles from "./PhotoCommentsForm.module.css";

const PhotoCommentsForm = ({ id, setComments, single }) => {
  const { request, error } = useFetch();

  const [comment, setComment] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComments((comments) => [...comments, json]);
      setComment("");
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        id="comment"
        namee="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      />
      <button className={styles.button}>
        <EnviarSvg />
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
