<script setup lang="ts">
import Buffer from "@/components/reactor/reactor_components/Buffer.vue";
import CentralValve from "@/components/reactor/reactor_components/CentralValve.vue";
import Turbine from "@/components/reactor/reactor_components/Turbine.vue";
import MainBlock from "@/components/reactor/reactor_components/MainBlock.vue";
</script>

<template>
  <div class="flex flex-col items-start relative">
    <Buffer/>
    <CentralValve/>
    <Turbine/>
    <MainBlock/>
  </div>
</template>