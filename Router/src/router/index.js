import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/pokemon/:name',
      name: 'poke',
      component: () => import('../views/PokeView.vue')
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import('../views/NoView.vue')
    }
  ]
})

export default router
