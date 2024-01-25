import { initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore} from 'firebase/firestore'
import { getAnalytics} from 'firebase/analytics'

/*
export default defineNuxtPlugin(nutxtApp => {
  const config = useRuntimeConfig()
  
  const firebaseConfig ={
    apiKey: "AIzaSyC1vuxkvOec8URAvIYPv6IMVEGFoJzvWFQ",
    authDomain: "testing01-e2ed4.firebaseapp.com",
    projectId: "testing01-e2ed4",
    storageBucket: "testing01-e2ed4.appspot.com",
    messagingSenderId: "692931164098",
    appId: "1:692931164098:web:25c92355aba0c0c1b5885b",
    measurementId: "G-1LX6RK5YW8"
  };

  const app = initializeApp(firebaseConfig)

  const analytics = getAnalytics(app)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  nutxtApp.vueApp.provide('auth', auth)
  nutxtApp.provide('auth', auth)

  nutxtApp.vueApp.provide('firestore', firestore)
  nutxtApp.provide('firestore', firestore)
})
*/

export default defineNuxtPlugin(nutxtApp => {
  // ignore
})