import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/firestore";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADoVsEEPUescUGBk3U1CVO-0nd58FGX9Y",
  authDomain: "task-chat-fafd3.firebaseapp.com",
  projectId: "task-chat-fafd3",
  storageBucket: "task-chat-fafd3.appspot.com",
  messagingSenderId: "1008870938740",
  appId: "1:1008870938740:web:105db0c484aaa3af29d921"
});

const db=firebaseApp.firestore();

const auth=firebase.auth();


export {db,auth}