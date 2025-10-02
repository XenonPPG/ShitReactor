import { defineStore } from 'pinia'
import {ref} from "vue";
import type ReactorComponent from "@/ts/reactor/ReactorComponent.ts";

export const useCurrentComponentData = defineStore('CurrentComponentData', () => {
    const component = ref<ReactorComponent | null>();

    return {component}
})
