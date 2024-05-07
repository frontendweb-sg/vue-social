import type { App } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export const GlobalComponents = {
  install(app: App, options: { [key: string]: string }) {
    app.component('BaseInput', BaseInput)
    app.component('BaseButton', BaseButton)
  }
}
