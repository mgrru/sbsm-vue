<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router="true"
    @select="handleSelect">
    <el-menu-item index="0" style="width: 200px" route="/about" disabled class="custom-disabled">
      <el-icon>
        <img style="width: 50px" src="/LogosMorpheusIcon.svg" alt="My logo" />
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
    <el-menu-item index="3" route="/recharge">
      <el-icon>
        <CreditCard />
      </el-icon>
      充值
    </el-menu-item>
    <el-menu-item index="4" route="/about">
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

  .custom-disabled {
    color: inherit !important;
    /* 保持原有颜色 */
    cursor: pointer !important;
    /* 改变鼠标图标 */
    opacity: 1 !important;
    /* 取消透明度 */
    pointer-events: none;
    /* 禁止点击事件 */
  }
</style>
