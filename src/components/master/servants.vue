<template>
  <div class="div-main" v-show="haveData">
    <el-scrollbar max-height="700px">
      <el-row>
        <el-col :span="6" v-for="(card, index) in table" :key="index">
          <div style="display: flex; align-items: center; text-align: center;">
            <el-card style="min-width: 200px" shadow="hover">
              <template #header>
                <div class="card-header">
                  <span>{{ card.name }}</span>
                </div>
              </template>
              <p class="text item">星级: {{ card.star }}星</p>
              <p class="text item">从者编号: {{ card.id }}</p>
              <p class="text item">个体编号: {{ card.sid }}</p>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
  <el-empty description="没有从者" v-show="!haveData" />
</template>

<script setup lang="ts">
  import router from '@/router'
  import axios from 'axios'
  import { onMounted, reactive, ref } from 'vue'

  interface servant {
    id: number
    star: number
    sid: number
    name: string
  }
  let haveData = ref(false)

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
        if (table.length != 0) {
          haveData.value = true
        } else {
          haveData.value = false
        }
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
  .div-main {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
