<template>
  <div class="user-manage">
    <el-table
      :data="pageListData.list"
      v-loading="loading"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="用户ID"
      >
      </el-table-column>
      <el-table-column
        prop="cellphone"
        label="手机号"
      >
      </el-table-column>
      <el-table-column
        label="可用余额"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.list.length==0">0</span>
          <span v-else>{{scope.row.list[0].balanceStr}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="锁仓金额"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.list.length==0">0</span>
          <span v-else>{{scope.row.list[0].lockStr}}</span>
        </template>
      </el-table-column>
      <el-table-column
        width="400"
        prop="addressEth"
        label="充币地址"
      >
      </el-table-column>

      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-dropdown>
            <span class="el-dropdown-link">
              可执行操作<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link :to="{path: 'rechargeRecord',query: {id:scope.row.id,type: 'c'}}">充值记录</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path: 'withDrawalsRecord',query: {id:scope.row.id,type: 't'}}">提币记录</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path: 'lockRecord',query: {id:scope.row.id, type: 's'}}">锁仓记录</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path: 'changePassword',query: {id:scope.row.id}}">密码修改</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path: 'changePhone',query: {id:scope.row.id}}">手机号修改</router-link>
              </el-dropdown-item>
              <el-dropdown-item>
                <router-link :to="{path: 'frozenAccount',query: {id:scope.row.id}}">账户冻结</router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-style">
      <el-pagination
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        layout="prev, pager, next"
        :total="pageListData.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'manageList',
    computed: {
      ...mapGetters({
        pageListData: 'pageListData'
      })
    },
    mounted() {
      this.getPageList()
    },
    methods: {
      handleCurrentChange(v) {
        this.pageNo = v
        this.getPageList()
      },
      getPageList() {
        this.loading = true
        this.$store.dispatch('getPageList', `?pageNo=${this.pageNo}&pageSize=${this.pageSize}`).then((res) => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
          this.loading = false
        })
      }
    },
    data() {
      return {
        pageNo: 1,
        loading: false,
        pageSize: 10
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './index';
</style>
