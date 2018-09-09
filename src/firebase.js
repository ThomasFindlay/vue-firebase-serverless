import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyD95RxZjBq1jjtHEzv5zoZO2fJaoBEyP8A',
  authDomain: 'vue-firebase-serverless.firebaseapp.com',
  databaseURL: 'https://vue-firebase-serverless.firebaseio.com',
  projectId: 'vue-firebase-serverless',
  storageBucket: 'vue-firebase-serverless.appspot.com',
  messagingSenderId: '469310388843'
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

export const firestoreDb = firestore;
export const firebaseStorage = firebase.storage();
