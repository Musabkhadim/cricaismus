import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAnalytics, isSupported } from "firebase/analytics"
import { getStorage } from "firebase/storage"

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBGXxPlnBrQuPhKiOlhamSgjgZRyPotghY",
  authDomain: "fitapp-7c42d.firebaseapp.com",
  databaseURL: "https://fitapp-7c42d-default-rtdb.firebaseio.com",
  projectId: "fitapp-7c42d",
  storageBucket: "fitapp-7c42d.appspot.com",
  messagingSenderId: "756937854583",
  appId: "1:756937854583:web:f4a1b58095255eb5298072",
  measurementId: "G-V1XLTQC3WS"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)

// ✅ Only run analytics in the browser
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app)
    }
  })
}

export { db, storage }
