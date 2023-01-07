<script setup>

import {useRoute,useRouter} from "vue-router";
import {ref} from "vue";
import {useGetData} from "@/composables/getData";

const route = useRoute();
const router = useRouter();
const poke = ref({});

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

  <button class="d-flex justify-content-center"
          @click="back" >
    Back
  </button>

</main>


</template>

<style scoped>

</style>