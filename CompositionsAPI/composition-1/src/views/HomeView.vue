<template>
  <div class="home">
    <p>Option API</p>
   <h1 :style="{'color' : color}">
     Counter: {{ counter }}
   </h1>
    <button @click="substract">-</button>
    <button @click="add">+</button>
  </div>
</template>

<script>

export default {
  data(){
    return{
      counter:0
    }
  },
  computed : {
    color(){
      if(this.counter < 0){
        return 'red'
      }else {
        return 'blue'
      }
    }
  },
  methods: {
    add(){
      this.counter ++
    },
    substract(){
      this.counter --
    }
  }
}

</script>

