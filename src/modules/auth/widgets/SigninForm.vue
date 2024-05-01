<template>
  <form @submit="onSubmit">
    <input type="email" name="email" v-model="email" />
    {{ emailError }}
    <button type="submit">Sign in</button>
  </form>
</template>

<script lang="ts" setup>
import { useForm, useField } from 'vee-validate'
import { object, string } from 'yup'

const validation = object({
  email: string().email().required('Email is required!'),
  password: string().required('Password is required')
})

const { handleReset, handleSubmit } = useForm({
  validationSchema: validation
})

const { value: email, errorMessage: emailError } = useField('email')

const onFormReset = () => {
  handleReset()
}

const onSubmit = handleSubmit((values) => {
  console.log('values', values)
})
</script>

<style>
</style>