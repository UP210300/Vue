<template>

  <div class="container">
    <h1 class="text-center">API Countries</h1>
    <Continents></Continents>
    <Browser></Browser>
    <CardList></CardList>
  </div>

</template>

<script>

import CardList from "@/components/CardList";
import Continents from "@/components/Continents";
import Browser from "@/components/Browser";

export default {

  components: {
    Browser,
    Continents,
    CardList
  }
}
</script>


