import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "clone-e16fb.firebaseapp.com",
    databaseURL: "https://clone-e16fb.firebaseio.com",
    projectId: "clone-e16fb",
    storageBucket: "clone-e16fb.appspot.com",
    messagingSenderId: "404369932339",
    appId: "1:404369932339:web:2a44c1854a58d97c672346"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };