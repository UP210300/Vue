<template>

  <button @click="$emit('action')">{{btnText}}</button>

</template>

<script>
export default {
  props:['btnText']
}
</script>

