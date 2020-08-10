import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyB2QuQzfMz7r5oO0sytt5D-u12QYUmliH4",
  authDomain: "reactgram-26f9e.firebaseapp.com",
  databaseURL: "https://reactgram-26f9e.firebaseio.com",
  projectId: "reactgram-26f9e",
  storageBucket: "reactgram-26f9e.appspot.com",
  messagingSenderId: "1003124477331",
  appId: "1:1003124477331:web:18db907b4445a5a2c7ec66"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage()
const projectFilestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {projectStorage, projectFilestore, timestamp}