<template>
  <div class="manually-coin">
    <div class="manually-up">
      <div style="margin:0 0 20px 30px;">
        <el-button type="primary" @click="submitForm" v-loading="loading">确认提币</el-button>
        <el-button @click="addAddress">添加地址</el-button>
      </div>
      <el-form ref="transferDTOS"
               :model="transferDTOS[k]"
               label-width="120px"
               size="small"
               :inline="true"
               class="manually-list"
               :rules="formRule"
               v-for="(v,k) in transferDTOS" :key="k">
        <el-form-item :label="'转账地址'+(k+1)" prop="address">
            <el-input placeholder="请输入以太坊地址" v-model="v.address"></el-input>
        </el-form-item>
        <el-form-item prop="value">
          <el-input placeholder="请输入转账金额" v-model="v.value"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="delAddress(k)" class="el-icon-circle-close"></el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="manually-down">
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
          prop="quantityStr"
          label="金额">
        </el-table-column>
        <el-table-column
          prop="toAddress"
          width="500"
          label="转账ID">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            <span>{{scope.row.status === 0 ? '等待' : scope.row.status === 1 ? '提现中' : scope.row.status === 2? '提现完成' : '提现失败'}}</span>
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
  </div>
</template>

<script>
  import { balanceVerification } from '@/utils/validate'
  import { mapGetters } from 'vuex'
  export default {
    name: 'manuallyCoin',
    data() {
      const valiAddress = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入以太坊地址'))
        } else {
          callback()
        }
      }
      const valiBalance = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入转账金额'))
        } else {
          if (!balanceVerification(value)) {
            callback(new Error('请输入正确金额'))
          } else {
            callback()
          }
        }
      }
      return {
        loading: false,
        pageNo: 1,
        pageSize: 10,
        recordData: [],
        transferDTOS: [
          {
            address: '',
            value: '',
            type: window.urlData.type
          }
        ],
        formRule: {
          address: [{ required: true, trigger: 'blur', validator: valiAddress }],
          value: [{ required: true, trigger: 'blur', validator: valiBalance }]
        }
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
      addAddress() {
        const _obj = {
          address: '',
          value: '',
          type: window.urlData.type
        }
        this.transferDTOS.push(_obj)
      },
      handleCurrentChange(v) {
        this.pageNo = v
        this.getRecord()
      },
      delAddress(k) {
        this.transferDTOS.splice(k, 1)
      },
      getRecord() {
        this.loading = true
        this.$store.dispatch('getTransactions', `?pageNo=${this.pageNo}&pageSize=${this.pageSize}&type=2`).then(() => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
          this.loading = false
        })
      },
      submitForm() {
        let _subFlag = true
        this.$refs.transferDTOS.forEach((v, k) => {
          v.validate((valid) => {
            if (valid) {
              _subFlag = true
            } else {
              _subFlag = false
            }
          })
        })
        if (_subFlag) {
          const obj = {
            type: window.urlData.type,
            transferDTOS: this.transferDTOS
          }
          this.loading = true
          this.$store.dispatch('getBatchTransfer', obj).then(() => {
            this.getRecord()
            this.$refs.transferDTOS.forEach((v, k) => {
              v.resetFields()
            })
            this.loading = false
            this.$message.success('确认成功')
          }).catch((err) => {
            this.$message.error(err)
            this.loading = false
          })
        } else {
          this.$message.error('请正确填写信息')
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import './index';
</style>
