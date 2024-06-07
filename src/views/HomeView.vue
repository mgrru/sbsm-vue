<template>
  <div class="common-layout">
    <el-container class="layout-container-demo">
      <el-header>
        <HeaderMenu />
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import HeaderMenu from './header-menu.vue'
</script>
<style scoped>
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }

  .layout-container-demo .el-aside {
    margin-right: 0;
    color: var(--el-text-color-primary);
    background: var(--el-color-primary-light-8);
  }

  .layout-container-demo .el-menu {
    border-right: none;
  }

  .layout-container-demo .el-main {
    text-align: center;
    padding: 0;
  }

  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    right: 20px;
  }
</style>
