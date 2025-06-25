// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAh90IRuc-aJYS35YnhGMHKBWXeahDzjt8",
  authDomain: "silencioseguro-c2c79.firebaseapp.com",
  projectId: "silencioseguro-c2c79",
  storageBucket: "silencioseguro-c2c79.firebasestorage.app",
  messagingSenderId: "765440815981",
  appId: "1:765440815981:web:136fa7806d3d0c96762064"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
