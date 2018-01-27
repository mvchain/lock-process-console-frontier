<template>
  <div>
    <div style="margin:20px 0 0 20px;">
      中心钱包余额：{{dataList.balanceStr}}{{type}}
    </div>
    <div style="margin:20px 0 0 20px;">
      客户钱包余额：{{dataList.otherBalanceStr}}{{type}}
    </div>
    <el-row v-loading="loading">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>提币</span>
          </div>
          <div>
            <el-col :span="12" class="box-left">
              金额
            </el-col>
            <el-col :span="12" class="box-right">{{dataList.deposite&&dataList.withdraw.quantityStr}}</el-col>
          </div>
          <div>
            <el-col :span="12" class="box-left">
              提币总单数
            </el-col>
            <el-col :span="12" class="box-right">{{dataList.deposite&&dataList.withdraw.num}}</el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>充币</span>
          </div>
          <div>
            <el-col :span="12" class="box-left">
              金额
            </el-col>
            <el-col :span="12" class="box-right">{{dataList.deposite&&dataList.deposite.quantityStr}}</el-col>
          </div>
          <div>
            <el-col :span="12" class="box-left">
              提币总单数
            </el-col>
            <el-col :span="12" class="box-right">{{dataList.deposite&&dataList.deposite.num}}</el-col>
          </div>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>锁仓</span>
          </div>
          <div>
            <el-col :span="4" class="">
              总锁仓金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.allBalanceStr}}</el-col>
            <el-col :span="4" class="">
              当前锁仓金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.nowBalanceStr}}</el-col>
            <el-col :span="4" class="">
              已解锁金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.unlockBalanceStr}}</el-col>
            <el-col :span="4" class="">
              总奖励金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.allInterestStr}}</el-col>
            <el-col :span="4" class="">
              未奖励金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.nowInterestStr}}</el-col>
            <el-col :span="4" class="">
              已奖励金额
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.unlockInterestStr}}</el-col>
            <el-col :span="4" class="">
              总锁仓单数
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.allNum}}</el-col>
            <el-col :span="4" class="">
              当前锁仓单数
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.nowNum}}</el-col>
            <el-col :span="4" class="">
              已解锁单数
            </el-col>
            <el-col :span="4" class="box-right" style="padding-right:30px;">{{dataList.deposite&&dataList.lock.unlockNum}}</el-col>
          </div>
        </el-card>
      </el-col>
    </el-row>



  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'totalData',
    mounted() {
      this.getAllData()
    },
    data() {
      return {
        type: window.urlData.type,
        loading: false
      }
    },
    computed: {
      ...mapGetters({
        dataList: 'dataList'
      })
    },
    methods: {
      getAllData() {
        this.loading = true
        this.$store.dispatch('getDataList', `?type=${window.urlData.type}&timeUnit=all`).then(() => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
          this.loading = false
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.box-card{
  margin-top:30px;
  width:100%;
  min-height:200px;
  .box-right{
    text-align:right;
    margin-bottom:20px;
  }
  .box-left{
    text-align: left;
  }
}
</style>
