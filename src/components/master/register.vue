<template>
  <el-form label-position="top" label-width="auto" :model="formData" style="max-width: 300px">
    <el-form-item label="Name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-button type="primary" @click="submit()">注册</el-button>
    <el-button type="primary" @click="reset()">重置</el-button>
  </el-form>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { reactive } from 'vue'

  const formData = reactive({
    name: '',
    password: ''
  })

  const submit = () => {
    axios
      .post('/api/register', {
        name: formData.name,
        password: formData.password
      })
      .then(function (res) {
        alert(res.data)
      })
  }

  const reset = () => {
    formData.name = ''
    formData.password = ''
  }
</script>

<style scoped>
  .el-form {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
