<template>

  <div class="container">
    <h1 class="text-center">API Countries</h1>
    <Continents></Continents>
    <CardList></CardList>
  </div>

</template>

<script>

import CardList from "@/components/CardList";
import Continents from "@/components/Continents";

export default {
  name: 'App',
  components: {
    Continents,
    CardList

  }
}
</script>


