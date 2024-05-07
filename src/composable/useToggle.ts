import { ref } from 'vue'

export function useToggle() {
  const open = ref(false)

  const handleToggle = () => (open.value = !open.value)
  const handleOpen = () => (open.value = true)
  const handleClose = () => (open.value = false)

  return {
    open,
    handleOpen,
    handleClose,
    handleToggle
  }
}
