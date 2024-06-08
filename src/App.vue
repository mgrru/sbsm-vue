<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import router from './router'
  import { onMounted } from 'vue'
  import axios from 'axios'

  const homePage = () => {
    router.push('/login')
  }

  const getToken = () => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common[ 'Authorization' ] = token
    }
  }

  onMounted(() => {
    homePage()
    getToken()
  })
</script>

<template>
  <RouterView />
</template>
