import React from 'react';
import classes from './LandingPage.module.css';
import Button from '../UI/Button/Button';
import {
  Link
} from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className={classes.startPage}>
        <div className={classes.btnWrapper}>
          <p className={classes.companyName}>Tessell</p>
          <h2>Tessellate Data, Transform Datacenters</h2>
          <Button type="submit"
            className={classes.btnLogin}
          ><Link to="/login">Login</Link>
          </Button>
          <Button type="submit"
            className={classes.btnSignUp}
          > <Link to="/signUp">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
