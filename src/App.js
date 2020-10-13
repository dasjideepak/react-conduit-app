import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Notifications from "./components/Notifications";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotification] = useState([]);

  setInterval(function () {
    var time = Date.now();
    notifications.filter((item) => {
      console.log(time < item.time + 5000 * 60, "ddd");
      if (time < item.time + 5000 * 60) {
        return console.log(time < item.time + 5000 * 60);
      }
      return item;
    });
  }, 2000);

  useEffect(() => {
    if (localStorage.authToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <Router>
        <Header isLogged={isLogged} setIsLogged={setIsLogged} user={user} />
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
            setUser={setUser}
          />
        </Route>
        <Route exact path="/create">
          <CreateArticlePage
            setNotification={setNotification}
            notifications={notifications}
          />
        </Route>
        <Route exact path="/user/update">
          <UpdateProfilePage
            setNotification={setNotification}
            notifications={notifications}
            user={user}
          />
        </Route>
        <Notifications notifications={notifications} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
