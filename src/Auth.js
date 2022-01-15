import { auth } from "./firebase"
import firebase from "firebase"

const provider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();


export const login_google = async () => {
    const res = await firebase.auth().signInWithPopup(provider)
    return res.user
}

export function logout() {
    return auth.signOut()
}
