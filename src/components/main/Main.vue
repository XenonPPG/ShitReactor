<script setup lang="ts">
import Button from "@/components/ui/Button.vue";
import LabelFraction from "@/components/main/LabelFraction.vue";
import Reactor from "@/components/reactor/Reactor.vue";
import {useRoute} from "vue-router";
import Fraction from "@/components/main/Fraction.vue";
import {computed, onMounted} from "vue";
import Input from "@/components/ui/Input.vue";
import Terminal from "@/components/main/Terminal.vue";

const route = useRoute();
const routes = computed(() => route.path.replace(/^\/+/,'').split('/').filter(x => x.length > 0));

function MakeRoute(index:number){
  return '/' + routes.value.slice(0, index + 1).join('/')
}
</script>

<template>
  <div class="size-[80%] flex border-1 border-primary">
    <!-- half 1-->
    <div class="flex flex-col flex-1/3 border-r-1 border-primary">
      <!-- router view -->
      <Fraction class="flex-1/2 border-b-1 border-primary overflow-y-scroll">
        <template #header>
          <div class="flex gap-2">
            <Button variant="ghost" as-child>
              <RouterLink to="/">
                central panel
              </RouterLink>
            </Button>

            <template v-for="(r, i) in routes">
              <p class="!text-secondary">></p>
              <Button variant="ghost" as-child>
                <RouterLink :to="MakeRoute(i)">
                  {{ r }}
                </RouterLink>
              </Button>
            </template>
          </div>
        </template>

        <template #content>
          <RouterView/>
        </template>
      </Fraction>

      <!-- terminal -->
      <LabelFraction label="консоль" class="flex-1">
        <Terminal/>
      </LabelFraction>
    </div>

    <!-- half 2 -->
    <!-- reactor -->
    <LabelFraction label="реактор" class="flex-1">
      <Reactor/>
    </LabelFraction>
  </div>
</template>