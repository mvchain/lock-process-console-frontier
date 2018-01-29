<template>
  <div style="margin-top:30px;">
    <el-form :label-position="labelPosition" label-width="120px">
      <el-form-item label="重置密码：">
        <el-input v-model="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5'

  export default {
    name: 'changePassword',
    data() {
      return {
        labelPosition: 'right',
        password: ''
      }
    },
    methods: {
      submit() {
        this.$confirm(`是否将该用户密码重置为${this.password}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const copyForm = md5(md5(this.password) + 'MVC')
          this.$store.dispatch('getChange', { id: this.$route.query.id, password: copyForm }).then(() => {
            this.$message({
              type: 'success',
              message: '设置成功!'
            })
          }).catch((err) => {
            this.$message.error(err)
          })
        }).catch(() => {
        })
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
