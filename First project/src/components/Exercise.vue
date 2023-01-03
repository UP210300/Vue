<script setup>
const name = 'Dynamic Vue';
const styleColor = 'color: cornflowerblue';
const arrayColors = ['blue', 'darkblue','deepskyblue'];
const active = true;
const arrayFruits = ["🍎", "🍌", "🍉", "🍓", "🍒"];
</script>

<template>
  <h1>Hello {{ name.toUpperCase() }}</h1>
  <h2 v-bind:style="styleColor">I'm blue</h2>
  <h3 :style="`color: ${arrayColors[1]}`">I'm another type of blue</h3>
  <p>{{ active? 'I am active': 'I am not active' }}</p>
  <p v-if="active">I am active</p>
  <p v-else>I am not active</p>
  <p v-if="!active">I am not active</p>
  <p v-if="active === true ">I am active</p>
  <p v-else-if="active === false">I am not active</p>
  <p v-else>Idk</p>
  <p v-show="active">This is true</p>
  <ul>
    <li
      v-for="(fruit,index) in arrayFruits"
      :key="index"
    >{{index}} - {{ fruit }}</li>
  </ul>
</template>

<style>
h1{
  color: darkcyan;
}
</style>