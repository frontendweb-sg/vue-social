<template>
  <signin-form />
</template> 
  
<script setup lang="ts">
import { AppContent } from '@/utils/content'
import SigninForm from '../../widgets/SigninForm.vue'
import { useAuthStore } from '../../store/auth'
import { storeToRefs } from 'pinia'
</script>
  
