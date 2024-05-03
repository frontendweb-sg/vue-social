<template>
  <h1>User page - {{ count }}</h1>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountStore } from './store/counter'

const countStore = useCountStore()
const { count } = storeToRefs(countStore)
</script>

<style>
</style>