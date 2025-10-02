<script setup lang="ts">

import ReactorComponentData from "@/ts/reactor/ReactorComponentData.ts";
import BlockGroup from "@/components/reactor/BlockGroup.vue";
import Block from "@/components/reactor/Block.vue";
</script>

<template>
  <BlockGroup class="flex gap-5 justify-between" :reactor-component="ReactorComponentData['central valve']">
    <div class="flex flex-col items-center">
      <Block class="w-10 h-15"/>
      <BlockGroup :reactor-component="ReactorComponentData['fuel pump']">
        <Block class="size-15"/>
      </BlockGroup>
      <Block class="w-10 h-10"/>
    </div>
    <Block class="h-40 w-10"/>
  </BlockGroup>
</template>