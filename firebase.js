// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
// import { getFirestore, collection, addDoc, getDocs, onSnapshot } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js"


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDzd71XotQlD1fw5b6KrtCPwZK6qyq9jvQ",
//     authDomain: "fir-javascript-corner2.firebaseapp.com",
//     projectId: "fir-javascript-corner2",
//     storageBucket: "fir-javascript-corner2.appspot.com",
//     messagingSenderId: "93867326793",
//     appId: "1:93867326793:web:08a397b33d7e1c8fecee98"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore();

// export const saveTask = (title, description) => 
//     addDoc(collection(db, 'tasks'), { title, description});

//     export const getTasks = () => getDocs(collection(db, 'tasks'));
//     export const onGetTasks = () => console.log('onGetTask')
//     export {onSnapshot, collection, db}

//     // getFirestore, collection, addDoc, getDocs, onSnapshot