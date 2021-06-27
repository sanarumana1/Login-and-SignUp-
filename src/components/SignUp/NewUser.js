import React, { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './NewUser.module.css';
import styles from '../MainHeader/MainHeader.module.css'
import Button from '../UI/Button/Button';
import {
  Link
} from "react-router-dom";

const NewUser = (props) => {
  const [enteredFirstname, setEnteredFirstname] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [createdPassword, setCreatedPassword] = useState('');
  const [createdPasswordValid, setCreatedPasswordValid] = useState('')
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //Checking form validity
  useEffect(() => {
    const identifier = setTimeout(() => {
     // console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6 
        && createdPassword.trim().length > 6 && createdPassword === enteredPassword
      );
    }, 500);
    return () => {
      //console.log('clean the function'); // Used useEffect cleanup function
      clearTimeout(identifier);
    };
    
  }, [enteredEmail, createdPassword, enteredPassword]); // dependencies (for which) If present,
  // effect will only activate if the values in the list

  // All the handlers
  const firstnameChangeHandler = (event) => {
    setEnteredFirstname(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  
  const createpasswordChangeHandler = (event) => {
    setCreatedPassword(event.target.value);
  };
  
// Validations
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };
  const validateCreatedPassword = () => {
    setCreatedPasswordValid(createdPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSignUp(enteredFirstname,enteredEmail,createdPassword,enteredPassword);
  };

  return (
    <div>
       <div className={classes.pageWrapper}>
       <Link to="/">
      <header className={styles['main-header']}>
        <button type="submit" className={classes.btn}>Back</button>
        </header>
        </Link>
    <Card className={classes.registration}>
        <h2>SIGN UP </h2>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="name"
            id="name"
            value={enteredFirstname}
            onChange={firstnameChangeHandler}
          />
        </div>
       
        <div
          className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${createdPasswordValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="createpassword"
            value={createdPassword}
            onChange={createpasswordChangeHandler}
            onBlur={validateCreatedPassword}
          />
        </div>
        <div
          className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Sign Up
          </Button>
        </div>
      </form>
    </Card>
    </div>
    </div>
  );
};

export default NewUser;