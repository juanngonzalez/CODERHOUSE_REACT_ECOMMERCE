import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzgvp8P7loQyem5zdp2LUZVQB_iDnSgTk",
  authDomain: "coderspace-34e87.firebaseapp.com",
  projectId: "coderspace-34e87",
  storageBucket: "coderspace-34e87.appspot.com",
  messagingSenderId: "1079171332627",
  appId: "1:1079171332627:web:e242dd0e595f5141325de6"
};

const app = initializeApp(firebaseConfig);

export const getFireStoreApp = () => {
    return app
}
    