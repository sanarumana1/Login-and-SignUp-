import React, { useEffect, useState } from 'react';
import './App.css'
import MainHeader from './components/MainHeader/MainHeader';
import Routing from './components/Routing/Routing';
//import { useHistory } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignIn, setSignUp] = useState(false);
  const [loader, setLoader] = useState(false);
  // let history = useHistory ();

  useEffect(() => {
    setLoader(false);
    const storedUserLoggedIninfo = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedIninfo === '1') {
      setIsLoggedIn(true);
    }
    //console.log('use Effect');
  }, []);


  const loginHandler = (email, password) => {
    setLoader(true);
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
    window.location.replace('/welcome');
  };

  const logoutHandler = () => {
    setLoader(true);
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
    setSignUp(false);
    window.location.replace('/');
  };

  const SignUpHandler = (name, lastname, email, createpassword, password) => {
    setLoader(true);
    localStorage.setItem('isLoggedIn', '1')
    setSignUp(true);
    setIsLoggedIn(true);
    window.location.replace('/fornewUser');
  };
  return (
    <div>
      {loader && <div class="loading">Loading...</div>}
      {!loader && <React.Fragment>
        {(isLoggedIn || isSignIn) && <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />}
        <Routing onLogin={loginHandler} onSignUp={SignUpHandler} />
      </React.Fragment>}

    </div>
  );
}

export default App;
