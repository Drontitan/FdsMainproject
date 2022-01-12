import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCcQopGXSWVIy16FrsoUqMEGEkbFRR-jXM",
  authDomain: "fdsproject-364e7.firebaseapp.com",
  projectId: "fdsproject-364e7",
  storageBucket: "fdsproject-364e7.appspot.com",
  messagingSenderId: "701594207227",
  appId: "1:701594207227:web:01055cbcde0d9e83d2815e",
  measurementId: "G-GGH2RXZ42Q"
})


export default app
export const auth = app.auth()

