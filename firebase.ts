import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTb1e26ArkffG3lidA5-N6xNghuj9X7WM",
  authDomain: "chatgpt-yt-c9fda.firebaseapp.com",
  projectId: "chatgpt-yt-c9fda",
  storageBucket: "chatgpt-yt-c9fda.appspot.com",
  messagingSenderId: "666815193945",
  appId: "1:666815193945:web:6a8d3394ad220f5510e248"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db= getFirestore(app);

export {db}