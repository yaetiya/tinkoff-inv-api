import React from "react";
import { Helmet } from "react-helmet";
import { HomePage } from "./Pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Helmet>
        <title>Tinkoff</title>
      </Helmet>
      <HomePage />
    </>
  );
}

export default App;
