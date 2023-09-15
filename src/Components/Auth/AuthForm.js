import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authKEY } from '../../store/authKEY';
import { login } from '../../features/starWarsAuthSlice';
import { fetchUser } from '../../fetch/fetch';
import classes from '../../styles/styles/AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    // optional: Add validation 

    setIsLoading(true) //set is loading to true whenever you do a request
    let url; //depending on the isLogin url changes from SIGN IN to SIGN UP
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${authKEY}`
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${authKEY}`
    };
    const options = {
      enteredEmail: enteredEmail,
      enteredPassword: enteredPassword
    };

    fetchUser('sign', url, options).then(res => {
      setIsLoading(false); //whenever you get a response even if it's not okay, set it back to false
      if (res.status === 200) {
        const usefullData = {
          email: res.data.email,
          idToken: res.data.idToken,
          uID: res.data.localId
        }
        dispatch(login(usefullData));
        navigate('/homepage');
        return res.data;
      }
    }).catch(err => {
      setIsLoading(false);
      alert(err.response.data.error.message);
    });
    // // fetch done with the fetch fn inside the component 
    // fetch(url,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       email: enteredEmail,
    //       password: enteredPassword,
    //       returnSecureToken: true
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   }
    // ).then(res => {
    //   setIsLoading(false); //whenever you get a response even if it's not okay, set it back to false
    //   if (res.ok) {
    //     return res.json();
    //   } else {
    //     return res.json().then(data => {
    //       // console.log(data);
    //       //show the error
    //       let errorMessage = 'Authentication failed!'; //in the case 
    //       if (data && data.error && data.error.message) {  //if there is date && and data error && data error message set the error message to a more specific one
    //         errorMessage = data.error.message;
    //       }
    //       throw new Error(errorMessage)
    //     });
    //   }
    // }).then(data => {
    //   console.log(data);
    //   const usefullData = {
    //     email: data.email,
    //     idToken: data.idToken
    //   }
    //   // dispatch(login(data.idToken));
    //   dispatch(login(usefullData));
    //   navigate('/')
    // })
    //   .catch(err => {
    //     alert(err.message)
    //   });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
