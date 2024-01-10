// Import the functions you need from the SDKs you need
const { initializeApp } =  require("firebase/app");
const { getFirestore,doc, 
setDoc,
collection,
getDocs,
query,

} = require('firebase/firestore');
const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID
} = process.env;
// console.log(API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID, MEASUREMENT_ID);
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

// Initialize Firebase
let app;
let firestoreDb;
const initializeAppFunction = () => {
    try {
       app = initializeApp(firebaseConfig);
        firestoreDb = getFirestore();
        return app;

    } catch (error) {
        return error;
}
}

const uploadData = async () => {
    const data = {
        name: 'test',
        age: 20
    }
    const document = doc(firestoreDb,"test","unique-id");
    await setDoc(document,data);
}

const retrieveData = async () => {
    try{
        const collectionRef = collection(firestoreDb,"test");
        const finalData = [];
        const q = query(collectionRef);
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            finalData.push(doc.data());
        });
        return finalData;

    } catch (error){
        return error;
    }
}



const getFirebaseApp = () => app;

module.exports = {
    getFirebaseApp,
    uploadData,
    initializeAppFunction,
    retrieveData
};