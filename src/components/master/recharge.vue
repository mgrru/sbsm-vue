<template>
  <div style="max-width: 400px" class="rechargeview">
    <div>
      <el-radio-group v-model="rmb">
        <div class="radio-tag-pair">
          <el-radio value="6" size="large" border>&nbsp;&nbsp;6元&nbsp;&nbsp;</el-radio>
          <el-tag size="large" type="primary">&nbsp;&nbsp;1颗圣晶石&nbsp;&nbsp;</el-tag>
        </div>
        <div class="radio-tag-pair">
          <el-radio value="25" size="large" border>&nbsp;25元&nbsp;</el-radio>
          <el-tag size="large" type="success">&nbsp;&nbsp;5颗圣晶石&nbsp;&nbsp;</el-tag>
        </div>
        <div class="radio-tag-pair">
          <el-radio value="78" size="large" border>&nbsp;78元&nbsp;</el-radio>
          <el-tag size="large" type="info">&nbsp;18颗圣晶石&nbsp;</el-tag>
        </div>
        <div class="radio-tag-pair">
          <el-radio value="158" size="large" border>158元</el-radio>
          <el-tag size="large" type="warning">&nbsp;41颗圣晶石&nbsp;</el-tag>
        </div>
        <div class="radio-tag-pair">
          <el-radio value="258" size="large" border>258元</el-radio>
          <el-tag size="large" type="danger">&nbsp;99颗圣晶石&nbsp;</el-tag>
        </div>
        <div class="radio-tag-pair">
          <el-radio value="518" size="large" border>518元</el-radio>
          <el-tag size="large" type="primary">221颗圣晶石</el-tag>
        </div>

      </el-radio-group>
    </div>
    <el-divider border-style="dashed" />
    <el-button type="primary" @click="submit()">充值</el-button>
  </div>
</template>

<script setup lang="ts">
  import router from '@/router'
  import axios from 'axios'
  import { ref } from 'vue'

  const rmb = ref(0)

  const submit = () => {
    axios
      .post('/api/recharge', {
        rmb: rmb.value
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
        if (res.data != "登录验证失败,请重新登录!")
          alert(res.data)
      })
  }
</script>

<style scoped>
  .el-radio-group {
    flex-direction: column;
  }

  .rechargeview {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .radio-tag-pair {
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
    margin-bottom: 10px;
    /* 每对之间的间距 */
  }

  .radio-tag-pair .el-radio {
    margin-right: 10px;
    /* 单选按钮和标签之间的间距 */
  }
</style>
