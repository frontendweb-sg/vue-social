<template>
  <router-link
    v-if="to"
    :to="to"
    :class="[
      'flex items-center text-slate-700 hover:text-rose-500 p-2 hover:bg-gray-50 rounded-md',
      $attrs.class
    ]"
    v-bind="$attrs"
  >
    <Icon :size="16" class="mr-2" /> <slot />
  </router-link>
  <button v-bind="$attrs" v-else :class="['flex items-center', $attrs.class]">
    <Icon :size="16" class="mr-2" /> <slot />
  </button>
</template>

<script setup lang="ts">
import { icons } from 'lucide-vue-next'
import { computed } from 'vue'
import { type RouteLocationRaw } from 'vue-router'

interface Props {
  to?: RouteLocationRaw
  icon?: string
}

const props = withDefaults(defineProps<Props>(), {
  to: '/'
})

const Icon = computed(() => icons[props.icon as keyof typeof icons])
</script>

<style>
</style>