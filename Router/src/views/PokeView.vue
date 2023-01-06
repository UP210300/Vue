<script setup>

import axios from "axios";
import {useRoute,useRouter} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const router = useRouter();
const poke = ref({});

const back = () => {
  router.push('/pokemon')
}

const getData = async() => {
  try {
    const {data} = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
  }catch (error){
    console.log(error);
  }
}

getData();

</script>

<template>


  <h2 class="mt-5">Pokemon name: {{ $route.params.name }}</h2>
  <img :src="poke.sprites?.front_default" alt="">
  <button @click="back" >Back</button>

</template>

<style scoped>

</style>