<template>
  <el-form label-position="top" label-width="120px" style="max-width: 150px">
    <el-button class="el-button1 el-button" type="primary" @click="submit1()">
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

  const submit1 = () => {
    router.push('/master/sell')
  }

  const submit2 = () => {
    router.push('/master/recharge')
  }
</script>

<style scoped>
  .el-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .el-button {
    width: 120px;
    margin-top: 10px;
    margin-left: 12px;
  }
</style>
