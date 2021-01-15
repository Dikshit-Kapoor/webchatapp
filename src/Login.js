import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "./Firebase";
import { actionTypes } from "./reducer";
import {useStateValue} from "./StateProvider";

export default function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) =>{
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
    })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="logincontainer">
        <img
          src="https://images.indianexpress.com/2015/02/whatsapp-security-tips.jpg"
          alt=""
        />
        <div className="logintext">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}
