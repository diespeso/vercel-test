<template>
  <div>
    Testing Estado Odt
  </div>
  <div class="testing">
    <button v-on:click="more">+</button>
    <button v-on:click="less">-</button>
  </div>
  <div>
    {{ counter }}
  </div>
</template>

<script setup lang="ts">

  const props = defineProps<{
    counterInit?: number,
    name?: String
  }>()
  console.log('hello, testing')

  const counter = useState('counter', () => props.counterInit ?? 1)

  const more = (event: Event) => {
    console.log(event)
    counter.value += 1
  }

  const less = (event: Event) => {
    console.log(event)
    counter.value -= 1
  }
</script>

<style>
.testing {
  display: flex;
  justify-content: space-between;
}

button {
  background-color: goldenrod;
  border: 1px solid black;
  color: white;
  border-radius: 4px;
}
</style>