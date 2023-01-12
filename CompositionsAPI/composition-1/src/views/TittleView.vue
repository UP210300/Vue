<template>

  <h1 :style="{'color' : color}">
    Counter: {{ counter}}
  </h1>

</template>

<script>
export default {
  props: ['counter','color']

}

</script>

