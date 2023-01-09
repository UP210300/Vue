<script>

import {useRouter} from "vue-router";

const router = useRouter();

const goBack = () => {
  router.push('/pokemon')
}


</script>

<template>
  <h1>404</h1>
  <button @click="goBack" >Back</button>
</template>



<style scoped>

</style>