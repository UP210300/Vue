<script setup>
const name = 'Dynamic Vue';
const arrayFruits = [
  {
    name: "Apple",
    price: "$1.00",
    description: "An apple",
    stock: 0,
    id: 0
  },
  {
    name: "Pear",
    price: "$2.00",
    description: "A pear",
    stock: 10,
    id: 1
  },
  {
    name: "Orange",
    price: "$3.00",
    description: "An orange",
    stock: 20,
    id: 2
  },
];
const objectFruit =
    {
      name: "Apple",
      price: "$1.00",
      description: "An apple",
      stock: 0
    }
</script>

<template>
  <h1>Hello {{ name.toUpperCase() }}</h1>
  <ul>
    <li
        v-for="fruit in arrayFruits"
        :key="fruit.id"
    >
      {{fruit.name}} - {{fruit.price}} - {{fruit.description}} - {{fruit.stock}}
    </li>
  </ul>
  <ul>
    <li
        v-for="(value,key, index) in objectFruit"
        :key="value"
    >
      {{ index }} - {{ key }} : {{value}}
    </li>
  </ul>
  <ul>
    <template v-for="item in arrayFruits" :key="item.name">
      <li
          v-if="item.stock > 0">
        {{item.name}} : {{item.price}}
      </li>
    </template>
  </ul>

</template>

<style>
h1{
  color: darkcyan;
}
</style>