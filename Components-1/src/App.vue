<script setup>

import { ref, onMounted } from 'vue';
import PostPagination from "./components/PostPagination.vue";
import BlogPost from './components/BlogPost.vue';
import LoadingSpinner from './components/LoadingSpinner.vue';


const posts = ref([]);
const postPerPage = 10;
const start=ref(0);
const end=ref(postPerPage);
const loading=ref(true);

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
onMounted( async () => {
  loading.value = true
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        posts.value = data
      })
      .finally(() => {
        setTimeout( ()=> {
          loading.value = false
        }, 1500)
        })
})

</script>

<template>

  <LoadingSpinner v-if="loading"/>

  <div class="container" v-else>
    <div class="text-center mt-2">
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
