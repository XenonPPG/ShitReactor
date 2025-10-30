<script setup lang="ts">
import BlockGroup from "@/components/reactor/BlockGroup.vue";
import Block from "@/components/reactor/Block.vue";
import ReactorComponentData from "@/ts/reactor/ReactorComponentData.ts";
</script>

<template>
<BlockGroup :reactor-component="ReactorComponentData['main-block']" class="absolute right-0">
  <div class="flex-center flex-col">
    <Block class="w-35 h-2"/>
    <Block class="w-40 h-60"/>
    <Block class="w-35 h-5"/>
  </div>

  <div class="flex justify-between px-5">
    <div class="flex flex-col">
      <Block class="w-7 h-28"/>
      <Block class="w-7 h-8"/>
    </div>

    <div class="flex flex-col">
      <Block class="w-7 h-8"/>
      <Block class="w-7 h-28"/>
    </div>

    <div class="flex flex-col">
      <Block class="w-7 h-28"/>
      <Block class="w-7 h-8"/>
    </div>
  </div>
</BlockGroup>
</template>