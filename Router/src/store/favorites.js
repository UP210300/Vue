import {defineStore} from "pinia";
import {ref} from "vue";

export const useFavoritesStore = defineStore('favorites', () => {

    const favorites =ref([]);

    const add = (poke) => {
        favorites.value.push(poke)
    }

    return{
        favorites,
        add
    }
})