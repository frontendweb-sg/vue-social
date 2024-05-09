import type { App } from 'vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseDivider from '@/components/ui/BaseDivider.vue'
import BaseNav from '@/components/ui/BaseNav.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseListSkeleton from '@/components/ui/BaseListSkeleton.vue'

import BaseDate from '@/components/ui/BaseDate.vue'
import BaseTextarea from '@/components/ui/BaseTextarea.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

export const GlobalComponents = {
  install(app: App, options: { [key: string]: string }) {
    app.component('BaseInput', BaseInput)
    app.component('BaseButton', BaseButton)
    app.component('BaseCard', BaseCard)
    app.component('BaseDivider', BaseDivider)
    app.component('NavItem', BaseNav)
    app.component('BaseContainer', BaseContainer)
    app.component('BaseListSkeleton', BaseListSkeleton)
    app.component('BaseDate', BaseDate)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseSelect', BaseSelect)
  }
}
