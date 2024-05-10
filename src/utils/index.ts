import { AxiosError } from 'axios'
import { toast } from 'vue3-toastify'

export const raiseToast = (error: any) => {
  if (error instanceof AxiosError) {
    const errors = error.response?.data.errors as Array<Error>
    errors.forEach((error) => {
      toast.error(error.message)
    })
  } else toast.error(error.message)
}
