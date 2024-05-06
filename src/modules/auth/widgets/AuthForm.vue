<template>
  <div
    :class="[
      'px-6 py-16 shadow-md flex items-center justify-center min-h-96 max-w-[360px] min-w-[360px] flex-col bg-white rounded-md',
      $attrs.class
    ]"
  >
    <slot name="header" />
    <form v-bind="$attrs" class="space-y-4 w-full">
      <div class="mb-6">
        <h2 class="text-[24px] font-medium">{{ title }}</h2>
        <p class="text-xs text-slate-400">
          {{ subtitle }}
          <router-link :to="props.to" class="text-rose-600 font-medium hover:text-purple-800">{{
            linkText
          }}</router-link>
        </p>
      </div>
      <slot />
    </form>
  </div>
</template>

<script setup lang="ts">
import { AppContent } from '@/utils/content'

defineOptions({
  inheritAttrs: false
})

const props = withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
    to?: URL | string
    linkText?: string
  }>(),
  {
    title: AppContent.signup,
    subtitle: AppContent.signupSubtitle,
    linkText: AppContent.signin,
    to: '/'
  }
)
</script>

<style>
</style>