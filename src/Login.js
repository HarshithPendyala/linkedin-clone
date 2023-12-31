import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import "./Login.css";
import {createUserWithEmailAndPassword,updateProfile,signInWithEmailAndPassword} from 'firebase/auth'

function Login() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch= useDispatch();

  const register = () => {
    if(!name){
        return alert("Please enter a full name!");
    }

    createUserWithEmailAndPassword(auth,email,password)
    .then((userAuth) =>{
        updateProfile(userAuth.user,{
            displayName: name,
            photoURL: photo
        })
        .then(()=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:name,
                photoUrl: photo
            }))
        })
    }).catch(error => alert(error));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL
      }))
    })
    .catch(error => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png"
        alt="linkedIn"
      />

      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        />
        <input
          type="text"
          value={photo}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Profile Pic URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign-in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login_register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
