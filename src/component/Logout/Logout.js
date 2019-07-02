import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

function Logout(props) {
  if (props.isAuth) {
    return (
      <div>
        {props.changeAuth()}

        <Redirect to="/login" />
      </div>
    );
  }
}

export default Logout;