<script setup lang="ts">
import {computed, provide, ref, watch} from 'vue'
import {GroupSelected} from './groupSelectedSymbol'
import ReactorComponent from "@/ts/reactor/ReactorComponent.ts";
import {useCurrentComponentData} from "@/stores/CurrentComponentData.ts";

const currentComponent = useCurrentComponentData();

const props = defineProps({
  reactorComponent: ReactorComponent
})


const selected = computed(() => currentComponent.component?.name == props.reactorComponent?.name)

provide(GroupSelected, selected)

function toggle() {
  currentComponent.component = selected.value ? null : props.reactorComponent;
}
</script>

<template>
  <button
      @click.stop="toggle"
      class="hover:cursor-pointer">
    <slot/>
  </button>
</template>
