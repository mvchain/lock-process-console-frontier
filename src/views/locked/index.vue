<template>
  <div class="locked">
    <div style="margin-bottom:20px;">解锁比例：</div>
    <div style="margin-bottom:20px;">
      <el-input
         placeholder="请输入内容" v-model="locked">
        <template slot="prepend">1/</template>
      </el-input>

    </div>
    <el-button @click="subHandler">提交</el-button>
  </div>
</template>

<script>
  export default {
    name: 'locked',
    data() {
      return {
        locked: ''
      }
    },
    methods: {
      subHandler() {
        this.$store.dispatch('getLockedHandler', this.locked).then(() => {
          this.locked = ''
          this.$message.success('解锁成功')
        }).catch()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .locked{
    padding:20px;
    width:500px;
  }
</style>
