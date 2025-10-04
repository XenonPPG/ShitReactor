<script setup lang="ts">
import Fraction from "@/components/main/Fraction.vue";

const props = defineProps({
  label: {type: String, required: true},
})
</script>

<template>
  <Fraction>
    <template #header>
      <p class="!text-secondary">{{ props.label }}</p>
    </template>

    <template #content>
      <slot/>
    </template>
  </Fraction>
</template>