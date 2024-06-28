// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH7hdkt4gMeHpWfeXqjSAnMrXPzV50Xuk",
  authDomain: "blog-app-8f8c7.firebaseapp.com",
  projectId: "blog-app-8f8c7",
  storageBucket: "blog-app-8f8c7.appspot.com",
  messagingSenderId: "177549603546",
  appId: "1:177549603546:web:9a3821bea214fdc9fe2be3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
