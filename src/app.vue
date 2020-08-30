<template>
  <div id="app">{{ message }}</div>
  <el-input v-model="message"></el-input>
</template>

<script>
import ElInput from "../packages/Input/Input.vue"
import { ref } from "vue"
export default {
  components: { ElInput },
  setup() {
    const message = ref("hello, Vue3!")
    return {
      message,
    }
  },
}
</script>
