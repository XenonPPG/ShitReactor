<script setup lang="ts">
import TerminalMessage from "@/views/TerminalView/TerminalMessage.vue";
import {useTerminal} from "@/stores/Terminal.ts";

const logs = useTerminal();
</script>

<template>
<div class="flex flex-col">
  <TerminalMessage v-for="(log, i) in logs.messages"
                   :message="log"
  :class="{'border-t-1 border-secondary/20':i != 0}"/>
</div>
</template>