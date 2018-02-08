<template>
  <div class="operation-record">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户充值记录" name="first">
        <el-input v-model="searchRecharge">
          <el-button slot="append" icon="el-icon-search" @click="searchHandler(0)"></el-button>
        </el-input>
        <el-table
          v-loading="loading"
          :data="transactionData.list"
          style="width: 100%">
          <el-table-column
            prop="orderId"
            label="单号"
          >
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="时间"
          >
          </el-table-column>
          <el-table-column
            prop="userId"
            label="用户ID">
          </el-table-column>
          <el-table-column
            prop="quantityStr"
            label="充值金额">
          </el-table-column>

          <el-table-column
            width="400"
            prop="fromAddress"
            label="转出地址">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
             <span>{{statusHandler(scope.row.status)}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-style">
          <el-pagination
            @current-change="handleCurrentChange"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="transactionData.total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="提币记录" name="second">
        <el-input v-model="searchWithdraw">
          <el-button slot="append" icon="el-icon-search" @click="searchHandler(1)"></el-button>
        </el-input>
        <el-table
          v-loading="loading"
          :data="transactionData.list"
          style="width: 100%">
          <el-table-column
            prop="orderId"
            label="单号"
          >
          </el-table-column>
          <el-table-column
            prop="createdAt"
            label="时间"
          >
          </el-table-column>
          <el-table-column
            prop="userId"
            label="用户ID">
          </el-table-column>
          <el-table-column
            prop="quantityStr"
            label="提币金额">
          </el-table-column>
          <el-table-column
            width="400"
            prop="toAddress"
            label="转入地址">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <span>{{statusHandler(scope.row.status)}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-style">
          <el-pagination
            @current-change="handleCurrentChange1"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="transactionData.total">
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="锁仓记录" name="third">
        <el-input v-model="searchLock">
          <el-button slot="append" icon="el-icon-search" @click="searchHandler(2)"></el-button>
        </el-input>
        <el-table
          v-loading="loading"
          :data="lockRecordData.list"
          style="width: 100%">
          <el-table-column
            prop="orderId"
            label="单号"
          >
          </el-table-column>
          <el-table-column
            prop="updatedAt"
            label="时间"
          >
          </el-table-column>
          <el-table-column
            prop="userId"
            label="用户ID">
          </el-table-column>
          <el-table-column
            prop="quantityStr"
            label="锁仓金额">
          </el-table-column>
          <el-table-column
            prop="interestStr"
            label="锁仓收益">
          </el-table-column>
          <el-table-column
            prop="interestRate"
            label="利率">
          </el-table-column>
          <el-table-column
            prop="month"
            label="锁仓时长">
          </el-table-column>
          <el-table-column
            prop="updatedAt"
            label="解锁日期时间">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <span>{{scope.row.status === 0 ? '等待' : '完成'}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div class="pagination-style">
          <el-pagination
            @current-change="handleCurrentChange2"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="lockRecordData.total">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'operationRecord',
    data() {
      return {
        loading: false,
        activeName: 'first',
        pageNo1: 1,
        pageNo2: 1,
        pageNo3: 1,
        pageSize: 10,
        searchRecharge: '',
        searchWithdraw: '',
        searchLock: ''
      }
    },
    mounted() {
      this.getRecord(0, 1, '')
    },
    computed: {
      ...mapGetters({
        transactionData: 'transactionData',
        lockRecordData: 'lockRecordData'
      })
    },
    methods: {
      statusHandler(v) {
        if (v === 0) {
          return '等待'
        } else if (v === 1) {
          return '提现中'
        } else if (v === 2) {
          return '提现完成'
        } else {
          return '提现失败'
        }
      },
      handleClick(tab) {
        if (tab.index === '0') {
          this.getRecord(tab.index, this.pageNo1, this.searchRecharge)
        } else if (tab.index === '1') {
          this.getRecord(tab.index, this.pageNo2, this.searchWithdraw)
        } else {
          this.getLockRecord(tab.index, this.pageNo3, this.searchLock)
        }
      },
      searchHandler(k) {
        if (k === 0) {
          this.getRecord(k, this.pageNo1, this.searchRecharge)
        } else if (k === 1) {
          this.getRecord(k, this.pageNo2, this.searchWithdraw)
        } else {
          this.getLockRecord(k, this.pageNo3, this.searchLock)
        }
      },
      handleCurrentChange(v) {
        this.pageNo1 = v
        this.getRecord(0, v)
      },
      handleCurrentChange1(v) {
        this.pageNo2 = v
        this.getRecord(1, v)
      },
      handleCurrentChange2(v) {
        this.pageNo2 = v
        this.getLockRecord(this.pageNo3, v)
      },
      getRecord(v, no, str) {
        this.loading = true
        this.$store.dispatch('getTransactions', `?pageNo=${no}&pageSize=${this.pageSize}&type=${v}&key=${str}`).then(() => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
          this.loading = false
        })
      },
      getLockRecord(v, no, str) {
        this.loading = true
        this.$store.dispatch('getLockRecord', `?pageNo=${no}&pageSize=${this.pageSize}&type=${v}&key=${str}`).then(() => {
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
  @import './index';
</style>
