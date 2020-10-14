import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
import { ToastProvider } from "react-toast-notifications";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisibile] = useState(false);

  useEffect(() => {
    if (localStorage.authToken) {
      setIsLogged(true);
    }
  }, []);

  return (
    <>
      <ToastProvider>
        <Router>
          <Header isLogged={isLogged} setIsLogged={setIsLogged} user={user} />
          {isLogged ? (
            <Route exact path="/" component={AuthArticlesPage} />
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
          <Route exact path="/signup">
            <SignupPage />
          </Route>
          <Route exact path="/login">
            <LoginPage setIsLogged={setIsLogged} setUser={setUser} />
          </Route>
          <Route exact path="/create">
            <CreateArticlePage />
          </Route>
          <Route exact path="/user/update">
            <UpdateProfilePage user={user} />
          </Route>
          <Route exact path="/article/:slug">
            <SingleArticlePage
              user={user}
              setIsDeleteModalVisibile={setIsDeleteModalVisibile}
            />
          </Route>
          <Route exact path="/articles/:slug">
            <UpdateArticlePage user={user} />
          </Route>
          {isDeleteModalVisible ? (
            <DeleteModal setIsDeleteModalVisibile={setIsDeleteModalVisibile} />
          ) : (
            false
          )}
          <Footer />
        </Router>
      </ToastProvider>
    </>
  );
}

export default App;
