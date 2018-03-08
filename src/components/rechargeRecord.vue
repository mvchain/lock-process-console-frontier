<template>
  <div>
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
        :label="$route.query.type == 't'?'提币记录':'充值记录'">
      </el-table-column>

      <el-table-column
        width="400"
        prop="fromAddress"
        :label="$route.query.type == 't'?'提币地址':'充值地址'">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="scope">
          <span v-if="$route.query.type === 'c'" >{{scope.row.status === 0 ? '等待' : '成功'}}</span>
          <span v-if="$route.query.type === 't'" >{{scope.row.status === 0 ? '等待' : scope.row.status === 1 ? '提现中' : '提现完成'}}</span>
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
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'rechargeRecord',
    props: {
      keyWord: String,
      typeId: String
    },
    data() {
      return {
        loading: false,
        pageNo: 1,
        pageSize: 10
      }
    },
    computed: {
      ...mapGetters({
        transactionData: 'transactionData'
      })
    },
    mounted() {
      this.getRecord()
    },
    methods: {
      handleCurrentChange(v) {
        this.pageNo = v
        this.getRecord()
      },
      getRecord() {
        this.loading = true
        this.$store.dispatch('getTransactions', `?pageNo=${this.pageNo}&pageSize=${this.pageSize}&type=${this.typeId}&key=${this.keyWord}`).then(() => {
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

</style>
