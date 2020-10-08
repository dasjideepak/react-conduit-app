import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";

function App() {
  return (
    <Router>
      {localStorage.authToken ? (
        <Route exact path="/" component={AuthArticlesPage} />
      ) : (
        <Route exact path="/" component={HomePage} />
      )}
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/login" component={LoginPage} />
    </Router>
  );
}

export default App;
