<script setup>

import {useFavoritesStore} from "@/store/favorites";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const useFavorites = useFavoritesStore();
const {favorites} = storeToRefs(useFavorites);
const {remove} =useFavorites
const router = useRouter();

</script>

<template>

  <h1>Favorites</h1>
  <p v-if="favorites.length === 0">No favorites added yet</p>
  <ul class="list-group">
    <li class="list-group-item" v-for="poke in favorites" :key="poke.id">
    {{ poke.name }}
      <div class="d-inline">
        <div class="d-inline d-flex flex-row-reverse">
          <button class="btn small btn-danger "
                  @click="remove(poke.id)">
            Delete
          </button>
        </div>
        <div class=" d-inline d-flex flex-row">
          <router-link
              class="btn small btn-success "
          :to="`/pokemon/${poke.name}`">
            More info
          </router-link>
        </div>
      </div>

    </li>
  </ul>

</template>

