<template>
  <div class="separate">
    <div >
      <span>Email:</span>
      <input v-model="creds.email"/>
    </div>
    <div>
      <span>Contrasenia:</span>
      <input v-model="creds.password" />
    </div>
    
  </div>
  <button v-on:click="handleRegistration">Probar</button>
</template>

<script setup lang="ts">
 const { registerUser} = useFirebaseAuth()

 const creds = reactive({
  email: '',
  password: ''
 })

 async function handleRegistration() {
  await registerUser(creds.email, creds.password)
 }
</script>

<style>
.separate {
  display: flex;
  justify-content: space-between;
}

</style>