import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState({
    credentials: {
      username: '',
      password: ''
    }
  });
  const [error, setError] = useState('');
  const { push } = useHistory();

  const handleChange = e => {
    setState({
      ...state,
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  const submit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        push('/bubbles')
      })
      .catch(err => setError('Username or Password not valid.'))
  }


  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={submit}>
          <input
            name='username'
            placeholder='username'
            type='text'
            id="username"
            onChange={handleChange}
            value={state.credentials.username}
          />
          <input
            name='password'
            placeholder='password'
            type='text'
            id="password"
            onChange={handleChange}
            value={state.credentials.password}
          />
          <button id="submit">Log in</button>
        </form>
      </div>

      {error && <p id="error" className="error">{error}</p>}
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"