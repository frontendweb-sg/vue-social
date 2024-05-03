import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import SigninPage from '@/modules/auth/signin/SigninPage.vue'

describe('Signin component', () => {
  test('Initial component loading', () => {
    const wrapper = mount(SigninPage)
    expect(wrapper.text()).toContain('Sign in page')
  })
})
