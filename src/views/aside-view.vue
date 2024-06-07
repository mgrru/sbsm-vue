<template>
  <el-scrollbar>
    <el-menu
      active-text-color="#ffcce5"
      background-color="#808080"
      text-color="#000"
      default-active="1"
      router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1" route="/log/select">
        <el-icon>
          <Histogram />
        </el-icon>
        <span>日志</span>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon>
            <User />
          </el-icon>
          用户
        </template>

        <el-menu-item index="2-1" route="/user/select">
          <el-icon>
            <List />
          </el-icon>
          查询
        </el-menu-item>
        <el-menu-item index="2-2" route="/user/add">
          <el-icon>
            <Plus />
          </el-icon>
          添加
        </el-menu-item>
      </el-sub-menu>

      <el-menu-item index="3" route="/login">
        <el-icon>
          <Promotion />
        </el-icon>
        登录
      </el-menu-item>

      <el-menu-item index="4" route="/about">
        <el-icon>
          <Promotion />
        </el-icon>
        关于
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
  console.log('handleOpen', key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log('handleClose', key, keyPath)
}
</script>
