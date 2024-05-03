import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCountStore = defineStore('count', {
  state() {
    return {
      count: 1
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCountStore, import.meta.hot))
}
