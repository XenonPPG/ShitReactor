import { defineStore } from 'pinia'
import {ref} from "vue";

export const useReactor = defineStore('Reactor', () => {
    const power = ref([0, 0, 0, 0, 0]);

    return {power}
})
