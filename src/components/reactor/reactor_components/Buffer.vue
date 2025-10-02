<script setup lang="ts">
import ReactorComponentData from "@/ts/reactor/ReactorComponentData.ts";
import BlockGroup from "@/components/reactor/BlockGroup.vue";
import Block from "@/components/reactor/Block.vue";
</script>

<template>
  <BlockGroup class="flex flex-col items-center" :reactor-component="ReactorComponentData.buffer">
    <Block class="w-40 h-12"/>
    <Block class="w-30 h-5"/>
    <Block class="w-40 h-12"/>
    <Block class="w-30 h-5"/>
    <Block class="w-40 h-12"/>
    <Block class="w-30 h-5"/>
    <Block class="w-40 h-12"/>
  </BlockGroup>
</template>