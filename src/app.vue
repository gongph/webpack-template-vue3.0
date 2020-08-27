<template>
  <div id="app">{{ message }}</div>
</template>

<script>
import { ref } from "vue"
export default {
  setup() {
    const message = ref("hello, Vue3!")
    return {
      message,
    }
  },
}
</script>
