import { defineStore } from 'pinia'
import {computed, ref} from "vue";
import type ReactorComponent from "@/ts/reactor/ReactorComponent.ts";
import ReactorComponentData from "@/ts/reactor/ReactorComponentData.ts";
import {useRoute} from "vue-router";

export const useCurrentComponentData = defineStore('CurrentComponentData', () => {
    const route = useRoute();
    const component = computed(() => ReactorComponentData[route.params.name]);

    return {component}
})
