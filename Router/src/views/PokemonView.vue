<script setup>

import {ref} from "vue";
import axios from "axios";

const pokemon = ref([]);


</script>

<template>

  <h1>Pokemon</h1>
  <ul>
    <li v-for="poke in pokemon">
      {{ poke.name }}
    </li>
  </ul>

</template>

<style scoped>

</style>