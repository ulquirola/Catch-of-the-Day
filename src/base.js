import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCz0PVnYF6RrPKe2Sqd3qGnKeZxRnMLjZc",
  authDomain: "catch-of-the-day-ulquirola.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ulquirola.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

