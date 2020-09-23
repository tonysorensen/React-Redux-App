import React from "react";
import "./App.css";
import Header from "./Header";
import Job from "./components/Job";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Job />
    </div>
  );
};

export default App;
