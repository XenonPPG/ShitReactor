<script setup lang="ts">
import {ref} from "vue";
import Buffer from "@/components/reactor/reactor_components/Buffer.vue";
import CentralValve from "@/components/reactor/reactor_components/CentralValve.vue";
import Turbine from "@/components/reactor/reactor_components/Turbine.vue";
</script>

<template>
  <div class="flex flex-col items-start">
    <Buffer/>
    <CentralValve/>
    <Turbine/>
  </div>
</template>