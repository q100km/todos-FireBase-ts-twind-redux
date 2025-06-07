import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyCegoweIk9Xzc0NFEESv2bJKnSQ_ova2Lk',
  authDomain: 'test-project-f68d4.firebaseapp.com',
  projectId: 'test-project-f68d4',
  storageBucket: 'test-project-f68d4.firebasestorage.app',
  messagingSenderId: '1071644559475',
  appId: '1:1071644559475:web:0a021ab564c83f6a8c0206',
  databaseURL: 'https://test-project-f68d4-default-rtdb.europe-west1.firebasedatabase.app/',
}

const app = initializeApp(firebaseConfig)
export const db = getDatabase(app)
