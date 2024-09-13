<template>
  <div class="text-red-400">home</div>
  <v-btn @click="increment"> +1 </v-btn>
  <span>{{ count }}</span>
  <v-btn @click="decrement"> +1 </v-btn>
</template>
<script lang="ts" setup>
  import { useCounterStore } from '@/stores/modules/counter.ts'
  import { toRefs } from 'vue'
  const counterStore = useCounterStore()
  const { count } = toRefs(counterStore)
  const { increment, decrement } = counterStore
</script>
<style></style>
