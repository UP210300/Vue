<template>
  <div class="about">
    <TittleView :counter="counter" :color="color"/>
    <p>Composition API</p>
    <!--<h1 :style="{'color' : color}">
      Counter: {{ counter }}
    </h1>
    <button @click="substract">-</button>
    <button @click="add">+</button>-->
    <Btn :btn-text="'Add'" @action="add"/>
    <Btn :btn-text="'Subtract'" @action="subtract"/>
  </div>
  <input type="text" v-model="text">
  <p>{{ text }}</p>
</template>

<script>

import TittleView from "@/views/TittleView";
import Btn from "@/views/Btn";
import {ref,computed} from 'vue';
export default {
  components: {Btn, TittleView},
  setup() {
    component: {
      TittleView
    }
    const counter = ref(0);
    const text = ref('');
    const add= () => counter.value ++;
    const subtract= () => counter.value --;

    const color = computed(() => {
      if(counter.value < 0){
        return 'red'
      }else {
        return 'blue'
      }
    });
  return {counter,add, subtract,color,text}
  }
}
</script>
