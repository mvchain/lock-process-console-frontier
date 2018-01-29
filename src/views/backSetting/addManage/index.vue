<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加管理员</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addUser">添加</el-button>
      </div>
      <el-table
        :data="userList.rows"
        v-loading="loading"
        style="width: 100%">
        <el-table-column
          label="级别"
          width="180">
          <template slot-scope="scope">
            <span>{{scope.row.type == 0?'高级管理员':'管理员'}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="username"
          label="账号">
        </el-table-column>
        <el-table-column
          label="操作">
          <template slot-scope="scope">
            <el-button @click="updateLev(scope.row)" size="small">修改权限</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-style">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="userList.total">
        </el-pagination>
      </div>
    </el-card>
    <el-dialog title="添加管理员" :visible.sync="dialogFormVisible">
      <el-form :model="userForm" :rules="userRules" ref="userForm" label-width="120px">
        <el-form-item label="管理员级别：">
          <el-select v-model="userForm.type" placeholder="请选择级别">
            <el-option label="高级管理员" value="0"></el-option>
            <el-option label="普通管理员" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名：" prop="name">
          <el-input v-model="userForm.name" placeholder="请输入真实姓名"></el-input>
        </el-form-item>
        <el-form-item label="账号：" prop="username">
          <el-input v-model="userForm.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="userForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="againPassword">
          <el-input type="password" v-model="userForm.againPassword" placeholder="请再次输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import md5 from 'blueimp-md5'
  export default {
    name: 'addManage',
    computed: {
      ...mapGetters({
        userList: 'userList'
      })
    },
    mounted() {
      this.getUserList()
    },
    methods: {
      getUserList() {
        this.loading = true
        this.$store.dispatch('getUserList', `?pageNo=${this.pageNo}&pageSize=${this.pageSize}`).then((res) => {
          this.loading = false
        }).catch((err) => {
          this.$message.error(err)
          this.loading = false
        })
      },
      handleCurrentChange(v) {
        this.pageNo = v
        this.getUserList()
      },
      addUser() {
        this.dialogFormVisible = true
      },
      submit() {
        this.$refs.userForm.validate((valid) => {
          if (valid) {
            let copyForm = JSON.stringify(this.userForm)
            copyForm = JSON.parse(copyForm)
            copyForm.password = md5(md5(copyForm.password) + 'MVC')
            this.$store.dispatch('setUserList', copyForm).then((res) => {
              this.$message.success('添加成功')
              this.$refs.userForm.resetFields()
              this.dialogFormVisible = false
              this.getUserList()
            }).catch((err) => {
              this.$message.error(err)
            })
          } else {
            this.$message.error('请完成表单填写')
            return false
          }
        })
      },
      updateLev(v) {
        const _obj = {
          id: v.id
        }
        let txt = ''
        if (v.type === '0') {
          _obj.type = '1'
          txt = '普通管理员'
        } else {
          _obj.type = '0'
          txt = '高级管理员'
        }
        this.$confirm(`是否设置为${txt}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('updateUser', _obj).then(() => {
            this.getUserList()
            this.$message.success('修改成功')
          }).catch((err) => {
            this.$message.error(err)
          })
        }).catch(() => {
        })
      }
    },
    data() {
      const valiAgainPassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请再次输入密码'))
        } else {
          if (value !== this.userForm.password) {
            callback(new Error('两次密码不一致'))
          } else {
            callback()
          }
        }
      }
      return {
        pageNo: 1,
        loading: false,
        pageSize: 10,
        userRules: {
          name: [{ required: true, trigger: 'blur', message: '真实姓名不能为空' }],
          password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
          username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
          againPassword: [{ required: true, trigger: 'blur', validator: valiAgainPassword }]
        },
        userForm: {
          name: '',
          password: '',
          type: '0',
          username: '',
          againPassword: ''
        },
        dialogFormVisible: false
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
