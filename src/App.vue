<script setup>

import BlogPost from './components/BlogPost.vue';
import { ref } from 'vue';

const posts = ref([
  {title:"Post 1", id:"1", body:"description"},
  {title:"Post 2", id:"2", body:"description"},
  {title:"Post 3", id:"3", body:"description"},
  {title:"Post 4", id:"4", body:"description"},
]);
const favorite = ref('')
const changeFavorite = (post) => {
  favorite.value = post;
};

</script>

<template>

  <div class="container">
    <div class="text-center">
      <h1>APP</h1>
    </div>
    <h2>My favorite post:</h2>
    <BlogPost
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"/>
  </div>

</template>

<style scoped>

</style>
