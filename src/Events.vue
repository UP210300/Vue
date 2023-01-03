<script setup>
import { ref } from "vue";

const name = 'Dynamic Vue';
const counter = ref(0);

//methods
const handleClick = (message) => {
  console.log(message);
};
const increment = () => {
  counter.value++;
}
</script>

<template>

  <h1>Hello {{ name.toUpperCase() }}</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment">Increment</button>
  <button v-on:click="handleClick('click left')">Left</button>
  <button @click.middle="handleClick('click middle')">Middle</button>
  <button @click.right.prevent="handleClick('click right')">Right</button>

</template>

<style>

h1{
  color: darkcyan;
}
</style>