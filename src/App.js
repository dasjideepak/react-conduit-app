import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (localStorage.authToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <Router>
      {isLogged ? (
        <Route exact path="/" component={AuthArticlesPage} />
      ) : (
        <Route exact path="/" component={HomePage} />
      )}
      <Route exact path="/signup">
        <SignupPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
    </Router>
  );
}

export default App;
