<template>
  <el-form label-position="top" label-width="auto" :model="formData" style="max-width: 300px">
    <el-form-item label="ID">
      <el-input v-model="formData.id" disabled />
    </el-form-item>
    <el-form-item label="Name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="formData.password" />
    </el-form-item>
    <el-form-item label="sq">
      <el-input v-model="formData.sq" disabled />
    </el-form-item>
    <el-form-item label="servant">
      <el-input v-model="formData.servant" disabled />
    </el-form-item>
    <el-button type="primary" @click="submit()">修改</el-button>
  </el-form>
</template>

<script lang="ts" setup>
  import router from '@/router'
  import axios from 'axios'
  import { onMounted, reactive } from 'vue'

  interface Master {
    id: number | null
    name: string | null
    password: string | null
    sq: number | null
    servant: number | null
  }

  let formData: Master = reactive({
    id: null,
    name: null,
    password: null,
    sq: null,
    servant: null,
  })

  let oData: Master = reactive({
    id: null,
    name: null,
    password: null,
    sq: null,
    servant: null,
  })

  // 修改
  const submit = () => {
    if (oData.name == formData.name && oData.password == formData.password) {
      return
    }
    axios
      .post('/api/master/update', {
        id: formData.id,
        name: formData.name,
        password: formData.password,
        sq: formData.sq,
      })
      .then(function (res) {
        if (res.data == "登录验证失败,请重新登录!") {
          localStorage.removeItem('token')
          router.push('/login')
          window.location.reload()
          alert(res.data)
        }
        return res
      })
      .then(function (res) {
        if (res.data != "登录验证失败,请重新登录!") {
          selectMaster()
          alert(res.data)
        }
      })
      .catch((err) => {
        localStorage.removeItem('token')
        router.push('/login')
        window.location.reload()
        alert("发生未知错误!请重新登录!")
      })

  }


  const selectMaster = () => {
    axios
      .get('/api/master/profile')
      .then(function (res) {
        if (res.data == "登录验证失败,请重新登录!") {
          localStorage.removeItem('token')
          router.push('/login')
          window.location.reload()
          alert(res.data)
        }
        return res
      })
      .then(function (res) {
        Object.assign(oData, res.data)
        oData.servant = res.data.servants.length
        Object.assign(formData, oData)
      })
      .catch((err) => {
        localStorage.removeItem('token')
        router.push('/login')
        window.location.reload()
        alert("发生未知错误!请重新登录!")
      })
  }

  onMounted(() => {
    selectMaster()
  })
</script>

<style scoped>
  .el-form {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>