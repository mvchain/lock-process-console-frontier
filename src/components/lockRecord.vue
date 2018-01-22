<template>
  <div>
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
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="lockRecordData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'lockRecord',
    data() {
      return {
        loading: false,
        pageNo: 1,
        pageSize: 10
      }
    },
    props: {
      keyWord: String
    },
    mounted() {
      this.getLockRecord()
    },
    computed: {
      ...mapGetters({
        lockRecordData: 'lockRecordData'
      })
    },
    methods: {
      handleCurrentChange(v) {
        this.pageNo = v
        this.getLockRecord()
      },
      getLockRecord() {
        this.loading = true
        this.$store.dispatch('getLockRecord', `?pageNo=${this.pageNo}&pageSize=${this.pageSize}&key=${this.keyWord}`).then(() => {
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
