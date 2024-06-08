<template>
  <el-form label-position="top" label-width="auto" :model="formData" style="max-width: 300px">
    <el-form-item label="ID">
      <el-input v-model="formData.id" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-button type="primary" @click="submit()">登录</el-button>
    <el-button type="primary" @click="reset()">重置</el-button>
  </el-form>
</template>

<script setup lang="ts">
  import axios from 'axios'
  import { reactive } from 'vue'

  interface data {
    id: Number
    password: String
  }

  const formData = reactive({
    id: '',
    password: ''
  })

  const submit = () => {
    axios
      .post('/api/login', {
        id: formData.id,
        password: formData.password
      })
      .then(function (res) {
        if (res.data == '用户不存在或密码不正确!') {
          alert('用户不存在或密码不正确!')
        } else {
          alert('登录成功！')
          localStorage.setItem('token', res.data)
          const token = localStorage.getItem('token')
          if (token) {
            axios.defaults.headers.common[ 'Authorization' ] = token
          }
        }
      })
  }

  const reset = () => {
    formData.id = ''
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
