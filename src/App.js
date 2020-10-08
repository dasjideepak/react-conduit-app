import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
    </Router>
  );
}

export default App;
