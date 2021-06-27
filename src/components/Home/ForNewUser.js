import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const UserEntered = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome!!</h1>
      <h4>Registration Completed Successfully</h4>
    </Card>
  );
};

export default UserEntered;
