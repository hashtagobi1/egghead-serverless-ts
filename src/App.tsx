import React from "react";
import Form from "./components/Form";
import "./App.css";
const App = () => {
  return (
    <React.Fragment>
      <header>
        <h1>Serverless Typescript + React</h1>
      </header>

      <main>
        <Form />
      </main>
    </React.Fragment>
  );
};

export default App;
