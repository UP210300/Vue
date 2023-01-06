<script setup>

import {ref} from "vue";
import axios from "axios";
import {RouterLink} from "vue-router";

const pokemon = ref([]);

const getData = async() => {
  try {
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    pokemon.value = data.results;
  }catch (error) {
    console.log(error);
  }
}

getData();

</script>

<template>

  <h1>Pokemon</h1>
  <ul>
    <li v-for="poke in pokemon">
      <router-link :to="`/pokemon/${poke.name}`">
        {{ poke.name }}
      </router-link>
    </li>
  </ul>

</template>

<style scoped>

</style>