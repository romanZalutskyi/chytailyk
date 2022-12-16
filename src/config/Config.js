import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD9eeZMy31p9-gcXhG4KqDyQmxtgCdf7tY",
  authDomain: "chytailyk-1cb41.firebaseapp.com",
  databaseURL: "https://fir-chytailyk-project-default-1cb41.firebaseio.com",
  projectId: "chytailyk-1cb41",
  storageBucket: "chytailyk-1cb41.appspot.com",
  messagingSenderId: "1048176771578",
  appId: "1:1048176771578:web:0992bb15d72033d5086443",
  measurementId: "G-7W7P253XPM"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();


export {auth, db, storage}