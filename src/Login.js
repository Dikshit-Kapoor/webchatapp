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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCb5a29OibzderqHYNqVCi-HYEri0W6g811g&usqp=CAU"
          alt=""
        />
        <div className="logintext">
          <h3 >In-App chat experiences users <br></br>With love </h3>
        </div>
        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}
