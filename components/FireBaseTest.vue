<template>
  <div>fire base test</div>
</template>

<script setup lang="ts">

  import {initializeApp} from 'firebase/app'
  import {getAnalytics} from 'firebase/analytics'

  const firebaseConfig = {
  apiKey: "AIzaSyC1vuxkvOec8URAvIYPv6IMVEGFoJzvWFQ",
  authDomain: "testing01-e2ed4.firebaseapp.com",
  projectId: "testing01-e2ed4",
  storageBucket: "testing01-e2ed4.appspot.com",
  messagingSenderId: "692931164098",
  appId: "1:692931164098:web:25c92355aba0c0c1b5885b",
  measurementId: "G-1LX6RK5YW8"
};

  // prueba de api
  const {data} = useFetch(`/api/items`)
  console.log('data here', data)

const app =initializeApp(firebaseConfig)
const analytics =getAnalytics()
</script>