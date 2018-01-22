<template>
  <div>
    <lock-record :keyWord="String($route.query.id)"></lock-record>
  </div>
</template>

<script>
  import lockRecord from '../../../../components/lockRecord'
  export default {
    name: 'lockRecord',
    components: {
      'lock-record': lockRecord
    },
    data() {
      return {
        pageNo: 1,
        pageSize: 10
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
