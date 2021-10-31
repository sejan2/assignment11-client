import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeAuthenication = () => {
    return initializeApp(firebaseConfig);
}
export default initializeAuthenication;