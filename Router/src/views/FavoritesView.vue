<script>

import {storeToRefs} from "pinia";
import {useFavoritesStore} from "@/store/favorites";

const useFavorites = useFavoritesStore();
const {} = storeToRefs(favorites)

</script>

<template>

  <h1>Favorite</h1>
  <ul class="list-group">
    <li class="list-group-item"
    v-for="poke in favorites"
    :key="poke.id">
    {{ poke.name }}
    </li>
  </ul>

</template>

<style scoped>

</style>