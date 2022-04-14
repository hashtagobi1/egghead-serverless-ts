import React, { useState, Fragment } from "react";
import styles from "./form.module.css";

const Form = () => {
  const [name, setName] = useState<string>("");
  const [faveColor, setFaveColor] = useState<string>("");
  const [response, setResponse] = useState();

  async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "" || faveColor === "") {
      return;
    }

    const res = await fetch("/.netlify/functions/submit", {
      method: "POST",
      body: JSON.stringify({ name, faveColor }),
    }).then((res) => res.json());

    setResponse(res);
    setName("");
    setFaveColor("");
  }
  return (
    <Fragment>
      <pre>{JSON.stringify(response, null, 2)}</pre>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          name="name"
          id="name"
          className={styles.input}
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="faveColor" className={styles.label}>
          Fave Color:
        </label>
        <input
          name="faveColor"
          id="faveColor"
          className={styles.input}
          type="text"
          onChange={(e) => setFaveColor(e.target.value)}
          value={faveColor}
        />

        <button className={styles.button}>Submit</button>
      </form>
    </Fragment>
  );
};

export default Form;
