import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWmP8_cJYm86GQ9hUc6yWW-H7e9LZ75vg",
  authDomain: "cloudbytes-1.firebaseapp.com",
  databaseURL: "https://cloudbytes-1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cloudbytes-1",
  storageBucket: "cloudbytes-1.appspot.com",
  messagingSenderId: "434092002324",
  appId: "1:434092002324:web:1467e9a90ad170a23e6b01"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);