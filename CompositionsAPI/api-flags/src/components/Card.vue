<template>
<div class="card mb-2">
  <div class="card body">
    <h5 class="text-center">{{country.name.common}}</h5>
    <p class="text-center">
      <img :src="country.flags" alt="{country.name.common}-flag" class="img-fluid w-50">
    </p>
    <div class="card-text">
      <span class="badge bg-dark d-block mb-1">Official name: {{country.name.official}}</span>
      <span class="badge bg-info d-block p-3 mb-1">Population: {{formatNumber(country.population)}}</span>
      <span class="badge bg-dark d-block mb-1">Capital: {{country.capital[0]}}</span>
      <span class="badge bg-dark d-block mb-1">Region: {{country.region}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['country'],
  setup(){
    const formatNumber= (num) => {
      return Intl.NumberFormat('en-US').format(num)
    }
    return {formatNumber}
  }
}
</script>

<style scoped>

</style>