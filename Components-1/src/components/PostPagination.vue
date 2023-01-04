<script setup>

defineProps(['start','end','maxLength']);

</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button
        @click="$emit('changePrevious')"
        type="button" class="btn btn-outline-primary"
        :disabled="start<=0"
    >
      Previous
    </button>
    <button
        @click="$emit('changeNext')"
        type="button" class="btn btn-outline-primary"
        :disabled="end >= maxLength"
    >
      Next
    </button>
  </div>
</template>

<style scoped>

</style>