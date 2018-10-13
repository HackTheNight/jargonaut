import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: "jae-jargonaut.firebaseapp.com",
  databaseURL: "https://jae-jargonaut.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
