<template>
  <el-card class="box-card" shadow="never">
    <div slot="header">
      <span>🥳 每日一句</span>
    </div>
    <div>
      <div class="has-text-left block">
        {{tip.content}}
      </div>
      <div class="has-text-right mt-5 block">
        {{tip.author}}
      </div>
    </div>
  </el-card>
</template>

<script>
// import {getTodayTip} from '@/api/tip'

export default {
  name: 'Tip',
  data () {
    return {
      tip: {}
    }
  },
  created () {
    this.fetchTodayTip()
  },
  methods: {
    fetchTodayTip () {
      this.$store.dispatch('GetType', {}).then(rs => {
        console.log(rs)
        this.tip = rs.data
      })
    }
  }
}
</script>

<style scoped>

</style>
