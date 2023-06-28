import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBpqhJFsbii8AnSlI5iQ0bRruwCz5ILDkI",
    authDomain: "linkedin-clone-4ddc7.firebaseapp.com",
    databaseURL: "https://linkedin-clone-4ddc7-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-4ddc7",
    storageBucket: "linkedin-clone-4ddc7.appspot.com",
    messagingSenderId: "589603667351",
    appId: "1:589603667351:web:76ca1f721217b40d7e98d2"
  };

  const firebaseapp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseapp);
  const auth = getAuth(firebaseapp);

  export { db, auth };