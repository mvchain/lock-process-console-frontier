<template>
  <div>
    <recharge-record :keyWord="String($route.query.id)" :typeId="typeId"></recharge-record>
  </div>
</template>

<script>
  import rechargeRecord from '../../../../components/rechargeRecord'
  export default {
    name: 'withDrawalsRecord',
    components: {
      'recharge-record': rechargeRecord
    },
    data() {
      return {
        pageNo: 1,
        pageSize: 10,
        typeId: '1'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
