<template>
  <el-form label-position="top" label-width="auto" style="max-width: 300px">
    <el-button type="primary" @click="submit1()">
      <el-icon>
        <img style="width: 15px" src="/GameIconsDoubleRingedOrb.svg" alt="灵基变还" />
      </el-icon>
      灵基变还
    </el-button>
    <el-button type="primary" @click="submit2()">
      <el-icon>
        <CreditCard />
      </el-icon>
      购买圣晶石
    </el-button>
  </el-form>
</template>

<script setup lang="ts">
  import router from '@/router'
  import { ref } from 'vue'

  let rmb = ref(0)

  const submit1 = () => {
    router.push('/master/sell')
  }

  const submit2 = () => {
    router.push('/master/recharge')
  }
</script>

<style scoped>
  .el-form {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
