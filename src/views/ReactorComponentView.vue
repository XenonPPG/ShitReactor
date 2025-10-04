<script setup lang="ts">
import {Status, StatusColors} from "@/ts/reactor/Status.ts";
import {useCurrentComponentData} from "@/stores/CurrentComponentData.ts";
import {computed} from "vue";

const currentComponent = useCurrentComponentData();

const componentStatus = computed(() => currentComponent.component?.status ?? Status.UNDEFINED);
</script>

<template>
  <div class="flex flex-col gap-5">
    <div>
      <p class="!text-secondary text-sm">компонент:</p>
      <h1 class="text-5xl">{{ currentComponent.component?.name ?? "NULL" }}</h1>
    </div>

    <p>Статус: <span :style="'color: ' + StatusColors[componentStatus]">{{ Status[componentStatus] }}</span></p>

    <div>
      <p class="!text-secondary text-sm">описание:</p>
      <p>{{ currentComponent.component?.description ?? "NULL" }}</p>
    </div>

    <div>
      <p v-if="currentComponent.component" class="!text-secondary text-sm">параметры:</p>
      <p v-for="param in currentComponent.component?.params">{{ param.phys.name }}: <span class="!text-secondary">[</span>min<span
          class="!text-secondary">:</span>{{ param.min ?? 0 }} - max<span class="!text-secondary">:</span>{{
          param.max
        }}<span class="!text-secondary">]</span>{{ param.phys.unit }}</p>
    </div>
  </div>
</template>