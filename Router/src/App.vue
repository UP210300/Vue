<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        PokeApp
      </router-link>
      <div>
        <router-link
            class="btn btn-outline-primary me-2"
            to="/">
          Home
        </router-link>
        <router-link
            class="btn btn-outline-primary me-2"
            to="/pokemon">
          Pokemon
        </router-link>
        <router-link
            class="btn btn-outline-primary me-2"
            to="/favorites">
          Favorites
        </router-link>
      </div>
    </div>
  </nav>
<div class="container text-center">
  <RouterView />
</div>

</template>


