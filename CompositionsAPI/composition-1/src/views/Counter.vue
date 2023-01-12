<template>

  <h1>Counter: {{counter}}</h1>
  <Btn :btn-text="'Add'" @action="add"/>
  <Btn :btn-text="'Subtract'" @action="subtract"/>

</template>

<script>
import Btn from "@/views/Btn";
import {useCounter} from "@/hooks/useCounter";

export default {
  components: {
    Btn
  },
  setup(){
    return{...useCounter()}
  }
}
</script>

