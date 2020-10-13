import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";
// import Notifications from "./components/Notifications";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [notifications, setNotification] = useState([
    {
      type: "error",
      message: "Something went wrong!",
    },
    {
      type: "error",
      message: "Something went wrong!",
    },
    {
      type: "success",
      message: "Account Created Successfully",
    },
  ]);

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
          <SignupPage
            setNotification={setNotification}
            notifications={notifications}
          />
        </Route>
        <Route exact path="/login">
          <LoginPage
            setIsLogged={setIsLogged}
            setNotification={setNotification}
            notifications={notifications}
          />
        </Route>
        <Route exact path="/create">
          <CreateArticlePage
            setNotification={setNotification}
            notifications={notifications}
          />
        </Route>
        {/* <Notifications notifications={notifications} /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
