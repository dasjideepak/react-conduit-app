import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Notifications from "./components/Notifications";
import DeleteModal from "./components/DeleteModal";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AuthArticlesPage from "./pages/AuthArticlesPage";
import CreateArticlePage from "./pages/CreateArticlePage";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import SingleArticlePage from "./pages/SingleArticlePage";
import UpdateArticlePage from "./pages/UpdateArticlePage";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [notifications, setNotification] = useState([]);
  const [isDeleteModalVisible, setIsDeleteModalVisibile] = useState(false);

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
        <Route exact path="/article/:slug">
          <SingleArticlePage
            setNotification={setNotification}
            notifications={notifications}
            user={user}
            setIsDeleteModalVisibile={setIsDeleteModalVisibile}
          />
        </Route>
        <Route exact path="/articles/:slug">
          <UpdateArticlePage
            setNotification={setNotification}
            notifications={notifications}
            user={user}
          />
        </Route>
        <Notifications notifications={notifications} />
        {isDeleteModalVisible ? (
          <DeleteModal setIsDeleteModalVisibile={setIsDeleteModalVisibile} />
        ) : (
          false
        )}
        <Footer />
      </Router>
    </>
  );
}

export default App;
