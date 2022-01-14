import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyAsJFlwnSDZmunk7lUI45xZtbkr8Dv11FQ",
  authDomain: "multiplayer-car-racing-g-60f1c.firebaseapp.com",
  databaseURL: "https://multiplayer-car-racing-g-60f1c-default-rtdb.firebaseio.com",
  projectId: "multiplayer-car-racing-g-60f1c",
  storageBucket: "multiplayer-car-racing-g-60f1c.appspot.com",
  messagingSenderId: "295075805743",
  appId: "1:295075805743:web:f32717e21e6ff75cb9e4da"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
