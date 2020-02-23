import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
    const config = {
        apiKey: "AIzaSyCnkI_lXwfNlMveDphKQj09LxkMxji_HmQ",
        authDomain: "todo-ninja-c8756.firebaseapp.com",
        databaseURL: "https://todo-ninja-c8756.firebaseio.com",
        projectId: "todo-ninja-c8756",
        storageBucket: "todo-ninja-c8756.appspot.com",
        messagingSenderId: "1064046208194",
        appId: "1:1064046208194:web:c4219b74d534d0ab6f475b"
    }
    firebase.initializeApp(config)
    firebase.firestore().settings({timestampsInSnapshots: true})
}
const db = firebase.firestore()
export {db}