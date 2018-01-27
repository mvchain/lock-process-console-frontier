<template>
  <div class="func-setting">
    <div class="func-recharge">
      <div class="func-title">
        <span class="func-title-txt">充提币设置</span>
        <span class="func-title-btn">
          <el-switch
            v-model="lockValue1"
            active-value="1"
            inactive-value="0"
            active-text="开启提币"
            inactive-text="关闭提币">
          </el-switch>
        </span>
      </div>
      <div class="func-body">
        <el-table
          v-loading="loading"
          :data="tableData1"
          style="width: 100%">
          <el-table-column
            prop="type"
            label="币种"
            width="180">
          </el-table-column>
          <el-table-column
            label="提币最小金额"
            width="180">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData1[scope.$index].min" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="提币最大金额">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData1[scope.$index].max" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            label="提币手续费">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData1[scope.$index].poundage" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(tableData1, 0)" type="text" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="func-lock">
      <div class="func-title">
        <span class="func-title-txt">锁仓设置</span>
        <span class="func-title-btn">
          <el-switch
            v-model="lockValue"
            active-text="开启锁仓"
            active-value="1"
            inactive-value="0"
            inactive-text="关闭锁仓">
          </el-switch>
        </span>
      </div>
      <div class="func-body">
        <el-table
          v-loading="loading"
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="type"
            label="币种"
            width="180">
          </el-table-column>
          <el-table-column
            label="锁仓时长(月)"
            width="180">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData[scope.$index].month" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="锁仓利息"
            width="180">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData[scope.$index].interest" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="最小锁仓金额">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData[scope.$index].min" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="最大锁仓金额">
            <template slot-scope="scope">
              <el-input size="small" v-model="tableData[scope.$index].max" ></el-input>
            </template>
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(tableData,1)" type="text" size="small">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'funcSetting',
    data() {
      return {
        loading: false,
        lockValue1: 0,
        lockValue: 0,
        rechargeValue: false,
        activeName: 'first',
        tableData: [
        ],
        tableData1: [
        ]
      }
    },
    mounted() {
      this.getBathAll()
    },
    computed: {
      ...mapGetters({
        configData: 'configData'
      })
    },
    methods: {
      handleClick(tab, v) {
        const obj = {
          config: JSON.stringify(tab),
          type: v,
          switchKey: v === 0 ? this.lockValue1 : this.lockValue,
          status: '0'
        }
        this.$store.dispatch('getConfigSave', obj).then(() => {
          this.$message.success('修改成功')
        }).catch((err) => {
          this.$message.error(err)
        })
      },
      getBathAll() {
        this.loading = true
        this.$store.dispatch('getBathAll').then(() => {
          this.configData.forEach((v, k) => {
            this.loading = false
            if (v.type === 0) {
              this.tableData1 = JSON.parse((v.config))
              this.lockValue1 = String(v.switchKey)
            } else {
              this.tableData = JSON.parse((v.config))
              this.lockValue = String(v.switchKey)
            }
          })
        }).catch((err) => {
          this.loading = false
          this.$message.error(err)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
 @import './index';
</style>
