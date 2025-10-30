<script setup lang="ts">
import {inject, ref} from 'vue'
import {GroupSelected} from './groupSelectedSymbol'

const selected = inject(GroupSelected)!
</script>

<template>
  <div
      class="border-1 border-primary"
      :class="{ 'blink': selected }"
  />
</template>

<style>
@keyframes blink {
  0% {
    background: var(--secondary);
  }
  50% {
    background: transparent;
  }
  100% {
    background: var(--secondary);
  }
}

.blink {
  animation: blink 1s infinite;
}
</style>
