import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyB3XAD82DIGkW_6yP03lpeJZRj7XWPPoeo',
  authDomain: 'shop-6a7f0.firebaseapp.com',
  projectId: 'shop-6a7f0',
  storageBucket: 'shop-6a7f0.appspot.com',
  messagingSenderId: '628038747907',
  appId: '1:628038747907:web:9bd684f0712cf1ef414b36',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
