<script setup lang="ts">
import Header from "@/components/Header.vue";
import Main from "@/components/main/Main.vue";
</script>

<template>
  <main class="flex flex-col h-screen flex-1">
    <Header/>
    <div class="flex-1 flex flex-col items-center justify-center">
      <Main/>
    </div>
  </main>
</template>