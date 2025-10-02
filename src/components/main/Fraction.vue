<script setup lang="ts">
const props = defineProps({
  label: {type: String, required: true},
})
</script>

<template>
  <div class="p-2">
    <p class="!text-secondary">{{ label }}</p>
    <div class="p-5">
      <slot/>
    </div>
  </div>
</template>