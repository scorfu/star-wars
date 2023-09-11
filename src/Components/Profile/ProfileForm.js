import classes from './ProfileForm.module.css';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchUser } from '../../fetch/fetch';


const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const token = useSelector(state => state.auth.token);

  const [passwordChanged, setPasswordChanged] = useState(false);

  const submitHandler = event => {
    event.preventDefault();
    const enteredNewPassword = newPasswordInputRef.current.value;
    const options = {
      token: token,
      enteredNewPassword: enteredNewPassword
    }
    //ADD VALIDATION
    fetchUser('passwordChange', 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCd2cgpFmJzwCnuzo_JhLILTGFeK7H2R9Y', options).then(res => {
        if(res.status === 200) {
          setPasswordChanged(true)
          alert('Password changed successfuly!');
        }
      }).catch(error => {
        const errorMessage = error.response.data.error.message
        alert(errorMessage);
      })

    // // with the fetch done inside the component:
    // fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCd2cgpFmJzwCnuzo_JhLILTGFeK7H2R9Y', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     idToken: token,
    //     password: enteredNewPassword,
    //     returnSecureToken: false
    //   }),
    //   headers: {
    //     'Content-type': 'application/json'
    //   }
    // }).then(res => {
    //   //assumption: always succeeds!
    //   console.log(res);
    //   if(res.ok) {
    //     setPasswordChanged(true)
    //     alert('Password changed successfuly!');
    //   }
    // })
  }
  return (
    <React.Fragment> {passwordChanged && <h2>Password changed successfuly</h2>}
      {!passwordChanged &&     <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>}
    </React.Fragment>
  );
}

export default ProfileForm;
