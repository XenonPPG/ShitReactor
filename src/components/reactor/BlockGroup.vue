<script setup lang="ts">
import {computed, provide, ref, watch} from 'vue'
import {GroupSelected} from './groupSelectedSymbol'
import ReactorComponent from "@/ts/reactor/ReactorComponent.ts";
import {useCurrentComponentData} from "@/stores/CurrentComponentData.ts";
import {useRouter} from "vue-router";

const router = useRouter();
const currentComponent = useCurrentComponentData();

const props = defineProps({
  reactorComponent: ReactorComponent
})


const selected = computed(() => currentComponent.component?.name == props.reactorComponent?.name)

provide(GroupSelected, selected)

function Reroute(){
  if(currentComponent.component?.name == props.reactorComponent?.name){
    router.push("/")
  }
  else{
    router.push("/reactor/" + props.reactorComponent?.name)
  }
}
</script>

<template>
  <button
      @click.stop="Reroute"
      :to="'/reactor/' + props.reactorComponent?.name"
      class="hover:cursor-pointer">
    <slot/>
  </button>
</template>
