import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// try use local variables
const firebaseConfig = {
  apiKey: "AIzaSyBBTjd9wjQLOFLKg4-FtvF76N-9pVPb2tA",
  authDomain: "skypro-workout.firebaseapp.com",
  databaseURL: "https://skypro-workout-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "skypro-workout",
  storageBucket: "skypro-workout.appspot.com",
  messagingSenderId: "707634527024",
  appId: "1:707634527024:web:f14f8ede7833fb69f926f5",
};

initializeApp(firebaseConfig);

const db = getDatabase();

export default db;
