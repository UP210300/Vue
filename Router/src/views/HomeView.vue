<script setup xmlns="http://www.w3.org/1999/html">

import {useCounterStore} from "@/store/counter";
import { storeToRefs } from "pinia";

const useCounter = useCounterStore();

const { increment } = useCounter;
const { count, double } = storeToRefs(useCounter);

</script>

<template>

  <div>
    <h1>Home counter {{count}}</h1>
    <h1>Double {{double}}</h1>
    <button @click="increment">Increment</button>
  </div>

</template>
