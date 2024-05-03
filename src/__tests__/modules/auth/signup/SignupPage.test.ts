import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SignupPage from '@/modules/auth/signup/SignupPage.vue'

describe('Signup component', () => {
  test('Initial component loading', () => {
    const wrapper = mount(SignupPage)
    expect(wrapper.text()).toContain('Sign up page')
  })
})
