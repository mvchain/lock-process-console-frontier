<template>
  <div class="operation-record">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户充值记录" name="first">
        <el-table
          :loading="loading"
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
            prop="fromAddress"
            label="转出地址">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <span>{{scope.row.status === 0 ? '等待' : scope.row.status === 1 ? '提现中' : '提现完成'}}</span>
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
        <el-table
          :loading="loading"
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
            prop="toAddress"
            label="转入地址">
          </el-table-column>
          <el-table-column
            label="状态">
            <template slot-scope="scope">
              <span>{{scope.row.status === 0 ? '等待' : scope.row.status === 1 ? '提现中' : '提现完成'}}</span>
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
        <el-table
          :loading="loading"
          :data="lockRecordData.list"
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
            @current-change="handleCurrentChange1"
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
        pageSize: 10
      }
    },
    mounted() {
      this.getRecord(0, 1, 10)
    },
    computed: {
      ...mapGetters({
        transactionData: 'transactionData',
        lockRecordData: 'lockRecordData'
      })
    },
    methods: {
      handleClick(tab) {
        if (tab.index === '0') {
          this.getRecord(tab.index, this.pageNo1)
        } else if (tab.index === '1') {
          this.getRecord(tab.index, this.pageNo2)
        } else {
          this.getLockRecord(tab.index, this.pageNo2)
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
      getRecord(v, no) {
        this.loading = true
        this.$store.dispatch('getTransactions', `?pageNo=${no}&pageSize=${this.pageSize}&type=${v}`).then(() => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
        })
      },
      getLockRecord(v, no) {
        this.loading = true
        this.$store.dispatch('getLockRecord', `?pageNo=${no}&pageSize=${this.pageSize}&type=${v}`).then(() => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './index';
</style>
