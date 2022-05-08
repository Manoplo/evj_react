import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG_YlQoQGbripcQsRVDQ6AhL80BQnQoj0",
  authDomain: "el-vestidor-de-julietta.firebaseapp.com",
  projectId: "el-vestidor-de-julietta",
  storageBucket: "el-vestidor-de-julietta.appspot.com",
  messagingSenderId: "663941054557",
  appId: "1:663941054557:web:93b57fbd1d730b0c818db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);