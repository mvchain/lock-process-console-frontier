<template>
  <div style="margin-top:30px;">
    <el-form :label-position="labelPosition" label-width="120px">
      <el-form-item label="修改手机：">
        <el-input v-model="cellphone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'changePhone',
    data() {
      return {
        labelPosition: 'right',
        cellphone: ''
      }
    },
    methods: {
      submit() {
        this.$confirm(`是否将该用户手机号设置为${this.cellphone}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('getChange', { id: this.$route.query.id, cellphone: this.cellphone }).then(() => {
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
