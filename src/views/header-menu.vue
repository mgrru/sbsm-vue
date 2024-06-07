<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router="true"
    @select="handleSelect">
    <el-menu-item index="0" style="width: 200px" route="/login">
      <el-icon>
        <Moon />
      </el-icon>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" route="/login">
      <el-icon>
        <User />
      </el-icon>
      登录
    </el-menu-item>
    <el-menu-item index="2" route="/register">
      <el-icon>
        <Plus />
      </el-icon>
      注册
    </el-menu-item>
    <el-menu-item index="3" route="/about">
      <el-icon>
        <Promotion />
      </el-icon>
      关于
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
</script>

<style>
  .flex-grow {
    flex-grow: 1;
  }
</style>
