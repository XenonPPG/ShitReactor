<script setup lang="ts">
import {useReactor} from "@/stores/Reactor.ts";

const reactor = useReactor();
</script>

<template>
<h1>{{ reactor.power }}</h1>
</template>