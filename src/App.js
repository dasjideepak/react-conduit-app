import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [notification, setNotification] = useState([]);

  useEffect(() => {
    if (localStorage.authToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <Router>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} />
        {isLogged ? (
          <Route exact path="/" component={AuthArticlesPage} />
        ) : (
          <Route exact path="/" component={HomePage} />
        )}
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/login">
          <LoginPage setIsLogged={setIsLogged} />
        </Route>
        <Route exact path="/create">
          <CreateArticlePage />
        </Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
