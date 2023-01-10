<script setup>

import {useRoute,useRouter} from "vue-router";
import {ref} from "vue";
import {useGetData} from "@/composables/getData";
import {useFavoritesStore} from "@/store/favorites";

const route = useRoute();
const router = useRouter();
const poke = ref({});
const useFavorites = useFavoritesStore();
const {add} = useFavorites;

const back = () => {
  router.push('/pokemon')
}

const {data,getData,loading,error} = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);

</script>

<template>

<main>
  <p v-if="loading">Loading info ...</p>
  <div class="alert alert-danger mt-2" v-if="error">Pokemon not found</div>
  <div v-if="data">

    <h1 class="d-flex justify-content-center mt-5">Pokemon name: {{ $route.params.name }}</h1>
    <img :src="data.sprites?.front_default" alt="">

  </div>
<div class="d-flex justify-content-around">

  <button class="btn btn-outline-primary"
          @click="back" >
    Back
  </button>
  <button
      class="btn btn-outline-primary mt-2" @click="add(data)">
    Add to favorites
  </button>

</div>

</main>

</template>

<style scoped>

</style>