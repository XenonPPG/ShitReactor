<script setup lang="ts">

import BlockGroup from "@/components/reactor/BlockGroup.vue";
import Block from "@/components/reactor/Block.vue";
import ReactorComponentData from "@/ts/reactor/ReactorComponentData.ts";
</script>

<template>
  <BlockGroup class="flex" :reactor-component="ReactorComponentData.turbine">
    <Block class="h-7 w-40"/>
    <div class="flex items-center relative">
      <Block class="h-10 w-5 -mt-2"/>
      <Block class="h-7 w-3 -mt-2"/>

      <!-- diesel generators -->
      <BlockGroup class="absolute flex items-center -top-27 -left-4" :reactor-component="ReactorComponentData['diesel-generators']">
        <Block class="size-12"/>
        <Block class="w-10 h-5"/>
      </BlockGroup>

      <Block class="h-10 w-5 -mt-2"/>
    </div>
    <Block class="h-7 w-40"/>
  </BlockGroup>
</template>