<template>
  <input
    type="text"
    :value="modelValue"
    @input="emitInput"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "ElInput",
  props: {
    modelValue: String,
    placeholder: "",
  },
  methods: {
    emitInput(e) {
      this.$emit("update:modelValue", e.target.value)
    },
  },
}
</script>
