import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
// import './index.css';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyCd2cgpFmJzwCnuzo_JhLILTGFeK7H2R9Y",
//   authDomain: "starwars-9376c.firebaseapp.com",
//   databaseURL: "https://starwars-9376c-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "starwars-9376c",
//   storageBucket: "starwars-9376c.appspot.com",
//   messagingSenderId: "398326396484",
//   appId: "1:398326396484:web:7a5431717727fd24042e11",
//   measurementId: "G-RT9QYXYR4E"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
{/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
</Provider>
);


