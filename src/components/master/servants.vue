<template>
  <!-- <el-table :data="table" height="600px" style="width: 100%" table-layout="auto" :show-header="false">
    <el-table-column label="servant">
      <template #default="scope">
        <div style="display: flex; align-items: center; text-align: center;">
          <el-card style="min-width: 200px">
            <template #header>
              <div class="card-header">
                <span>{{ scope.row.name }}</span>
              </div>
            </template>
<p class="text item">星级: {{ scope.row.star }}星</p>
<p class="text item">从者编号: {{ scope.row.id }}</p>
</el-card>
</div>
</template>
</el-table-column>
</el-table> -->

  <el-row :gutter="10">
    <el-col :span="5" offset="3" v-for="(card, index) in table" :key="index">
      <div style="display: flex; align-items: center; text-align: center;">
        <el-card style="min-width: 200px" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>{{ card.name }}</span>
            </div>
          </template>
          <p class="text item">星级: {{ card.star }}星</p>
          <p class="text item">从者编号: {{ card.id }}</p>
        </el-card>
      </div>
    </el-col>
  </el-row>

</template>

<script setup lang="ts">
  import router from '@/router'
  import axios from 'axios'
  import { onMounted, reactive } from 'vue'

  interface servant {
    id: number
    star: number
    sid: number
    name: string
  }

  let table: servant[] = reactive([])

  const selectServant = () => {
    axios
      .get('/api/master/servants')
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
        table.splice(0, table.length)
        res.data.forEach((e: servant) => {
          table.push(e)
        })
      })
      .catch((err) => {
        localStorage.removeItem('token')
        router.push('/login')
        window.location.reload()
        alert("发生未知错误!请重新登录!")
      })
  }

  onMounted(() => {
    selectServant()
  })
</script>

<style scoped>
  .el-row {
    max-inline-size: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
