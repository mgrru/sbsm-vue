<template>
  <div style="max-width: 600px">
    <el-alert :title="msg" type="info" />
    <el-button type="primary" @click="submit()">hello</el-button>
  </div>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { ref } from 'vue'

  const msg = ref('hello')

  const submit = () => {
    axios
      .post('/api/hello', {
        msg: msg.value
      })
      .then(function (res) {
        msg.value = res.data
      })
  }
</script>

<style scoped>
  .el-alert {
    margin: 20px 0 0;
  }

  .el-alert:first-child {
    margin: 0;
  }
</style>
