<template>
  <div>
    hey here inner yeah
  </div>
  <div>
    <EstadoOdtChip :counter-init="32" />
    
  </div>
</template>

<script setup lang="ts">

  const router = useRoute()

  console.log(router.params.id)

  // const { data} = await $fetch('http://google.com')

  // console.log(data)
</script>