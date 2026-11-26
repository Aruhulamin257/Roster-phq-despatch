// নোটিফিকেশন গ্রহণের সার্ভিস ওয়ার্কার — index.html এর পাশেই (একই ফোল্ডারে) রাখুন
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDK1tTGKuvFjQWoU0OEKdrUdPDbtoeYKtU",
  authDomain: "dispatch-roster-phq.firebaseapp.com",
  projectId: "dispatch-roster-phq",
  storageBucket: "dispatch-roster-phq.firebasestorage.app",
  messagingSenderId: "389072375702",
  appId: "1:389072375702:web:337e86b27c1d74090597b7"
});

// অ্যাপ বন্ধ বা ব্যাকগ্রাউন্ডে থাকলে FCM নিজেই নোটিফিকেশন দেখায়,
// ট্যাপ করলে অ্যাপ খোলে (পাঠানোর সময় দেওয়া link এ)।
firebase.messaging();
