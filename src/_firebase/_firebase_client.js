import { APP_CONFIG } from "@/configs/_app_configs";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2B14xoxpNSsommF1pRnn7jK4Jv_EL5QE",
  authDomain: "techday-8a54f.firebaseapp.com",
  projectId: "techday-8a54f",
  storageBucket: "techday-8a54f.appspot.com",
  messagingSenderId: "661468310321",
  appId: "1:661468310321:web:c45ea36ebae0b31c6e9e10",
  measurementId: "G-TTNTLSW23S",
};

// Initialize Firebase
const getFirebaseApp = () =>
  getApps().length ? getApp() : initializeApp(firebaseConfig);

export const GA = {
  logEvent: (eventName, options) => {
    if (APP_CONFIG.ENVIRONMENT.production) {
      logEvent(getAnalytics(getFirebaseApp()), eventName, options);
    }
  },
};
