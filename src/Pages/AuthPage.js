import React from 'react';
import AuthForm from '../Components/Auth/AuthForm';

const AuthPage = () => {
  return <React.Fragment>
    <div>To get access to the app you'll need an account, if you don't have one just click on "create new account" down below.</div>
    <div>It does not have to be a real email address as long as it's respecting the format of an email, e.g: abc@abc.cba and password is at least 6 characters.</div>
    <AuthForm />
  </React.Fragment>
};

export default AuthPage;
