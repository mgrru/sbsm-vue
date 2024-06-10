<template>
  <div class="rechargeview" style="width: 1200px;height: 400px;">
    <el-carousel height="400px" trigger="click" :autoplay="false" type="card">
      <el-carousel-item v-for="(url, index) in urls" :key="index">
        <el-image style="width: 600px; height: 400px;" :src="url" fit="contain" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <div style="max-width: 600px" class="rechargeview">
    <div class="button-style">
      <div class="button-pair">
        <el-button type="primary" @click="submit1()">
          <el-icon>
            <img style="width: 15px" src="/GameIconsDoubleRingedOrb.svg" alt="灵基召唤" />
          </el-icon>
          &nbsp;召唤×1次&nbsp;
        </el-button>
        <el-tag size="large" type="primary">&nbsp;&nbsp;&nbsp;消耗 圣晶石3&nbsp;&nbsp;&nbsp;</el-tag>
      </div>
      <div class="button-pair">
        <el-button type="primary" @click="submit2()">
          <el-icon>
            <img style="width: 15px" src="/GameIconsDoubleRingedOrb.svg" alt="灵基召唤" />
          </el-icon>
          召唤×11次
        </el-button>
        <el-tag size="large" type="success">&nbsp;&nbsp;消耗 圣晶石30&nbsp;&nbsp;</el-tag>
      </div>
    </div>
  </div>

  <div class="div-main" v-show="haveData">
    <el-divider border-style="dashed">本次获取的从者</el-divider>
    <el-scrollbar max-height="600px">
      <el-row>
        <el-col :span="6" v-for="(card, index) in summoningServants" :key="index">
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
</template>

<script setup lang="ts">
  import router from '@/router'
  import axios from 'axios'
  import { reactive, ref } from 'vue'

  const urls = [
    '/66BD99DEB54495DFAFF6E97513D4A1AE.jpg',
    '/A23E07DE40FC2A2C7C3B5DC3344C54ED.jpg',
    '/A93645F05ADA7BCCB1CEC76E21BF8F54.jpg',
    '/EEE0F6EB1997973FB286B7C8996307CA.jpg',
    '/PoolPic.jpg',
    '/1EB4DC768E71D5BB5A8B310B5EEDABB6.jpg',
  ]

  interface servant {
    id: number
    star: number
    sid: number
    name: string
  }

  let summoningServants: servant[] = reactive([])
  let haveData = ref(false)
  const submit1 = () => {
    axios
      .post('/api/master/summoning', {
        num: 1
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
        if (res.data != "登录验证失败,请重新登录!") {
          if (res.data != "圣晶石不足!") {
            summoningServants.splice(0, summoningServants.length)
            res.data.forEach((e: servant) => {
              summoningServants.push(e)
            })
            haveData.value = true
          } else {
            haveData.value = false
            summoningServants.splice(0, summoningServants.length)
            alert(res.data)
          }
        }
      })
      .catch((err) => {
        localStorage.removeItem('token')
        router.push('/login')
        window.location.reload()
        alert("发生未知错误!请重新登录!")
      })
  }

  const submit2 = () => {
    axios
      .post('/api/master/summoning', {
        num: 11
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
        if (res.data != "登录验证失败,请重新登录!") {
          if (res.data != "圣晶石不足!") {
            summoningServants.splice(0, summoningServants.length)
            res.data.forEach((e: servant) => {
              summoningServants.push(e)
            })
            haveData.value = true
          } else {
            haveData.value = false
            summoningServants.splice(0, summoningServants.length)
            alert(res.data)
          }
        }
      })
      .catch((err) => {
        localStorage.removeItem('token')
        router.push('/login')
        window.location.reload()
        alert("发生未知错误!请重新登录!")
      })
  }
</script>

<style scoped>

  .rechargeview {
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  .button-style {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button-pair {
    display: flex;
    align-items: center;
    /* 垂直居中对齐 */
    margin-bottom: 10px;
    /* 每对之间的间距 */
  }

  .button-pair .el-button {
    margin-right: 10px;
    /* 单选按钮和标签之间的间距 */
  }

  .demonstration {
    color: var(--el-text-color-secondary);
  }

  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

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
