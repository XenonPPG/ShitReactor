<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import Fraction from "@/components/main/Fraction.vue";
import Reactor from "@/components/reactor/Reactor.vue";
import DisplayFraction from "@/components/main/DisplayFraction.vue";
</script>

<template>
  <div class="size-[80%] flex border-1 border-primary">
    <!-- half 1-->
    <div class="flex flex-col flex-1/3 border-r-1 border-primary">
      <!-- display/console -->
      <Fraction label="дисплей" class="flex-1/2 border-b-1 border-primary">
        <DisplayFraction/>
      </Fraction>

      <!-- dashboard -->
      <Fraction label="консоль" class="flex-1">
        <Button>></Button>
      </Fraction>
    </div>

    <!-- half 2 -->
    <!-- reactor -->
    <Fraction label="реактор" class="flex-1">
      <Reactor/>
    </Fraction>
  </div>
</template>