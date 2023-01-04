<script setup>

import { ref } from 'vue';
import PostPagination from "./components/PostPagination.vue";
import BlogPost from './components/BlogPost.vue';


const posts = ref([]);
const postPerPage = 10;
const start=ref(0);
const end=ref(postPerPage);

const favorite = ref('');

const changeFavorite = (title) => {
  favorite.value = title;
};
const next = () => {
  start.value = start.value + postPerPage
  end.value = end.value + postPerPage
}
const previous = () => {
  //start.value += - postPerPage
  start.value = start.value - postPerPage
  end.value = end.value - postPerPage
}

fetch('https://jsonplaceholder.typicode.com/posts')
    .then( (res) => res.json() )
    .then( (data) => posts.value = data )

</script>

<template>

  <div class="container">
    <div class="text-center">
      <h1>APP</h1>
    </div>
    <h2>My favorite post: {{ favorite }} </h2>

    <!--<button @click="next">Next test</button>
    <button @click="previous">Previous test</button> -->

    <PostPagination
        @changeNext = "next"
        @changePrevious = "previous"
        :start="start"
        :end="end"
        :maxLength="posts.length"
        class="mb-2"
    />

    <BlogPost
        v-for="post in posts.slice(start,end)"
        :key="post.id"
        :title="post.title"
        :id="post.id"
        :body="post.body"
        class="mb-2"
        @changeFavorite = "changeFavorite"
    />

  </div>

</template>

<style scoped>

</style>
