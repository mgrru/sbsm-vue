<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" router="true"
    @select="handleSelect">
    <el-menu-item index="0" style="width: 200px" route="/about" disabled class="custom-disabled">
      <el-icon>
        <img style="width: 50px" src="/LogosMorpheusIcon.svg" alt="MYLOGO" />
      </el-icon>
    </el-menu-item>
    <el-menu-item index="5" route="/master/profile" v-show="isLogin">
      <el-icon>
        <Avatar />
      </el-icon>
      御主资料
    </el-menu-item>
    <el-menu-item index="6" route="/master/servants" v-show="isLogin">
      <el-icon>
        <img style="width: 20px" src="/GameIconsDoubleRingedOrb.svg" alt="灵基一览" />
      </el-icon>
      灵基一览
    </el-menu-item>
    <el-menu-item index="7" route="/master/summoning" v-show="isLogin">
      <el-icon>
        <img style="width: 20px" src="/GameIconsCaravel.svg" alt="灵基召唤" />
      </el-icon>
      灵基召唤
    </el-menu-item>
    <el-menu-item index="8" route="/master/shop" v-show="isLogin">
      <el-icon>
        <img style="width: 20px" src="/GameIconsDiceFire.svg" alt="商店" />
      </el-icon>
      商店
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
    <!-- <el-menu-item index="3" route="/recharge" v-show="isLogin">
      <el-icon>
        <CreditCard />
      </el-icon>
      购买圣晶石
    </el-menu-item> -->
    <el-menu-item index="4" route="/about">
      <el-icon>
        <Promotion />
      </el-icon>
      关于
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'

  const activeIndex = ref('1')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }


  // 控制登录后查看对应组件
  const isLogin = ref(false)
  const isShow = () => {
    const token = localStorage.getItem('token')
    if (token) {
      isLogin.value = true
    } else {
      isLogin.value = false
    }
  }


  onMounted(() => {
    isShow()
  })
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
