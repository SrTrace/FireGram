import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDIlqnZ1xXRp20XPS705QGIxq2X3u40VUU",
    authDomain: "firegram-fb18a.firebaseapp.com",
    projectId: "firegram-fb18a",
    storageBucket: "firegram-fb18a.appspot.com",
    messagingSenderId: "484498955607",
    appId: "1:484498955607:web:9114f780d2dd5ba045f212"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};