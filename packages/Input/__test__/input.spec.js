import { mount } from "@vue/test-utils"
import Input from "../index"

describe('ElInput.vue', () => {
  // props
  describe('props:', () => {
    test('modelValue', () => {
      const wrapper = mount(Input, {
        props: {
          modelValue: 'newValue'
        }
      })
      expect(wrapper.attributes('value')).toBe('newValue')
    })
    
    test('placeholder', () => {
      const wrapper = mount(Input, {
        props: {
          placeholder: 'place input...'
        }
      })
      expect(wrapper.attributes('placeholder')).toBe('place input...')
    })
  })

  // emits
  describe('emits:', () => {
    test("expect emits an 'update:modelValue' when input value", async () => {
      const wrapper = mount(Input)
      await wrapper.find('input').setValue('hello')
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })

  // options
  describe('options:', () => {
    test("expect component's name is ElInput", () => {
      const wrapper = mount(Input)
      expect(wrapper.vm.$options.name).toBe("ElInput")
    })
  })

})