<template>
  <div>
    <el-button @click="submit(0)">冻结账户</el-button>
    <el-button @click="submit(1)">解冻账户</el-button>
  </div>
</template>

<script>
  export default {
    name: 'frozenAccount',
    methods: {
      submit(v) {
        this.$confirm(`是否将该用户${v === 0 ? '冻结' : '解冻'}?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch('getChange', { id: this.$route.query.id, status: v }).then(() => {
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
