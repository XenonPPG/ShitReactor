<script setup lang="ts">
import {TerminalMessage, TerminalMessageColors, useTerminal} from "@/stores/Terminal.ts";
import Button from "@/components/ui/Button.vue";
import {computed} from "vue";

const terminal = useTerminal();

const props = defineProps({
  message: TerminalMessage
})

const color = computed(() => TerminalMessageColors[props.message?.type!])
const style = computed(() => `color: ${color.value} !important`)

function Copy() {
  navigator.clipboard.writeText(props.message?.text!);
}

function Delete() {
  terminal.messages = terminal.messages.filter(x => x.id != props.message?.id);
}

function Repeat() {
  terminal.SendMessage(props.message!)
}
</script>

<template>
  <div class="flex justify-between items-center px-2 group relative">
    <!-- bg -->
    <div class="absolute inset-0 size-full opacity-0 group-hover:opacity-25 z-0 pointer-events-none"
         :style="`background-color: ${color}`"/>

    <!-- text -->
    <!-- TODO: normalize time -->
    <p :style="style">{{ props.message?.time }} <{{ props.message?.type }}> {{ props.message?.text }}</p>

    <!-- buttons -->
    <div class="flex opacity-0 group-hover:opacity-100">
      <!-- repeat -->
      <Button v-if="props.message?.type == 'inp'" @click="Repeat" variant="ghost" class="p-2 bg-transparent"
              :style="style">r
      </Button>

      <!-- copy -->
      <Button @click="Copy" variant="ghost" class="p-2 bg-transparent" :style="style">c</Button>

      <!-- delete -->
      <Button @click="Delete" variant="ghost" class="p-2 bg-transparent" :style="style">x</Button>
    </div>
  </div>
</template>