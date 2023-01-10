<script setup>

import {ref} from "vue";
import {RouterLink} from "vue-router";
import {useGetData} from "@/composables/getData";

const pokemon = ref([]);
const {data,getData,loading,error} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/');

</script>

<template>

  <h1>Pokemon</h1>
  <p v-if="loading">Loading info ...</p>
  <div class="alert alert-danger my-2" v-if="error"> {{ error }}</div>
  <div v-if="data">
    <ul class="list-group">
      <li v-for="poke in data.results" class="list-group-item">
        <router-link :to="`/pokemon/${poke.name}`">
          {{ poke.name }}
        </router-link>
      </li>
    </ul>
    <div class="mt-2">
      <button
          :disabled="!data.previous"
          class="btn btn-success me-2">
        Previous
      </button>
      <button
          :disabled="!data.next"
          class="btn btn-primary"
          @click="getData(data.next)">
        Next
      </button>
    </div>
  </div>

</template>

<style scoped>

</style>