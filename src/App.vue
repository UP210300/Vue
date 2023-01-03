<script setup>
import { ref,computed } from "vue";

const name = 'Counter';
const counter = ref(0);
const arrayCounter = ref ([]);

//methods
const increment = () => {
  counter.value++;
}
const decrement = () => {
  counter.value--;
}
const reset = () => {
  counter.value = 0;
}

const add = () => {
  arrayCounter.value.push(counter.value);
}

const blockNumber = computed(() => {
  const number = arrayCounter.value.find((num) => num === counter.value);
  return number || number === 0;
});

const classCounter = computed(() => {
  if (counter.value === 0){
    return 'zero';
  }
  return counter.value > 0 ? 'positive' : 'negative'
});

</script>

<template>

  <div class="container text-center">

    <h1>{{ name.toUpperCase() }}</h1>
    <h2 :class="classCounter">{{ counter }}</h2>
    <div class="btn-group">
      <button @click="increment" class="bt btn-success">Increment</button>
      <button @click="decrement" class="bt btn-danger" >Decrement</button>
      <button @click="reset" class="bt btn-secondary">Reset</button>
      <button @click="add" class="bt btn-primary" :disabled="blockNumber">Add</button>
    </div>
    <br>
    <ul>
      <li
          v-for="(item,index) in arrayCounter"
          :key="index">
        {{ item }}
      </li>
    </ul>
  </div>

</template>

<style>

h1{
  color: midnightblue;
}
.positive{
  color: lawngreen;
}
.negative{
  color: red;
}
.zero{
  color: #181818;
}
</style>


