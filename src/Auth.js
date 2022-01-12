import { auth } from "./firebase"
import firebase from "firebase"

export function signup(email, password) {
    console.log(email)
    return auth.createUserWithEmailAndPassword(email, password)
}

export function _login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}

export function logout() {
    return auth.signOut()
}

const provider = new firebase.auth.GoogleAuthProvider();

export const login_google = async () => {
    const res = await firebase.auth().signInWithPopup(provider)
    return res.user
}