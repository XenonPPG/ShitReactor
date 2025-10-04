<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
</script>

<template>
  <div class="flex flex-col items-start gap-3">
    <h1 class="text-4xl">Центральная панель управления оператора калреактора</h1>

    <!-- reactor link -->
    <Button as-child variant="link">
      <RouterLink to="/reactor">
        Реактор
      </RouterLink>
    </Button>

    <!-- TODO -->
    <Button variant="link">Документация</Button>

    <!-- TODO -->
    <Button variant="link">О проекте</Button>
  </div>
</template>