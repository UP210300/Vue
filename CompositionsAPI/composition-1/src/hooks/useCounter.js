import {ref} from "vue";

export function useCounter(){
    const counter = ref(0);
    const add= () => {
        counter.value ++;
    }
    const subtract= () => {
        counter.value --;
    }
    return {counter,add, subtract}
}