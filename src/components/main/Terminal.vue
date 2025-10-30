<script setup lang="ts">
import Input from "@/components/ui/Input.vue";
import Button from "@/components/ui/Button.vue";
import {Commands} from "@/ts/reactor/Commands.ts";
import {computed, ref} from "vue";
import {useRouter} from "vue-router";
import {ErrorLogCommandNotFound, TerminalMessage, useTerminal} from "@/stores/Terminal.ts";

const router = useRouter();
const terminal = useTerminal();

const suggestions = computed(() => {
  if (terminal.input.length == 0) {
    return [];
  }
  return Commands.filter(c => c.name != terminal.input && c.name.includes(terminal.input));
})

function SendMessage(openTerminal:boolean){
  if(terminal.input.length > 0){
    terminal.SendMessage(new TerminalMessage(terminal.input))
    terminal.input = "";
  }

  if(openTerminal){
    router.push('/terminal')
  }
}
</script>

<template>
  <div class="flex gap-2 relative">
    <Input v-model="terminal.input" class="w-100" placeholder="</>"/>

    <!-- send command-->
    <Button @click="() => SendMessage(false)">></Button>

    <!-- send command and open logs -->
    <Tooltip label="Отправить и открыть логи">
      <Button @click="() => SendMessage(true)">>></Button>
    </Tooltip>

    <!-- clear line-->
    <Button @click="terminal.input = ''">x</Button>

    <!-- suggestions -->
    <div class="absolute top-15 flex flex-col">
      <Button v-for="(s, i) in suggestions"
              @click="terminal.input = s.name"
              class="!p-0.5 text-start"
              :class="{'!border-b-transparent':i != suggestions.length - 1}">{{ s.name }}
      </Button>
    </div>
  </div>
</template>