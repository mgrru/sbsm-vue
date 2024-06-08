<template>
  <div style="max-width: 400px" class="rechargeview">
    <div>
      <el-radio-group v-model="rmb">
        <div>
          <el-radio value="6" size="large" border>&nbsp;&nbsp;6元&nbsp;&nbsp;</el-radio>
          <el-tag size="large" type="primary">&nbsp;&nbsp;1颗圣晶石&nbsp;&nbsp;</el-tag>
        </div>
        <div>
          <el-radio value="25" size="large" border>&nbsp;25元&nbsp;</el-radio>
          <el-tag size="large" type="success">&nbsp;&nbsp;5颗圣晶石&nbsp;&nbsp;</el-tag>
        </div>
        <div>
          <el-radio value="78" size="large" border>&nbsp;78元&nbsp;</el-radio>
          <el-tag size="large" type="info">&nbsp;18颗圣晶石&nbsp;</el-tag>
        </div>
        <div>
          <el-radio value="158" size="large" border>158元</el-radio>
          <el-tag size="large" type="warning">&nbsp;41颗圣晶石&nbsp;</el-tag>
        </div>
        <div>
          <el-radio value="258" size="large" border>258元</el-radio>
          <el-tag size="large" type="danger">&nbsp;99颗圣晶石&nbsp;</el-tag>
        </div>
        <div>
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
  import axios from 'axios'
  import { ref } from 'vue'

  const rmb = ref(0)

  const submit = () => {
    axios
      .post('/api/recharge', {
        rmb: rmb.value
      })
      .then(function (res) {
        alert(res.data)
      })
  }
</script>

<style scoped>
  .el-alert {
    margin: 20px 0 0;
  }

  .el-alert:first-child {
    margin: 0;
  }

  .el-radio-group {
    flex-direction: column;
  }

  .rechargeview {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
