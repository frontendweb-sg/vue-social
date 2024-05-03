import { AxiosError } from 'axios'
import { toast } from 'vue3-toastify'

export const raiseToast = (error: Error) => {
  if (error instanceof AxiosError) {
    const errors = error.response?.data.errors
    for (let error of errors) {
      toast.error(error.message)
    }
  } else toast.error(error.message)
}
