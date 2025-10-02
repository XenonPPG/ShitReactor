<script setup lang="ts">
import {ref} from "vue";
import Buffer from "@/components/reactor/reactor_components/Buffer.vue";
import CentralValve from "@/components/reactor/reactor_components/CentralValve.vue";

const selected = ref();
</script>

<template>
  <Buffer/>
  <CentralValve/>
</template>