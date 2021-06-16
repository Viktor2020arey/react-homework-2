import React from "react";
// import React, { Component } from 'react';
import Counter from "./components/Counter/Counter";

const App = () => (
  <>
    <h1>Состояние компонента</h1>

    <Counter initialValue={666} />
  </>
);

export default App;
