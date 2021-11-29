<template>
<div>
  <div class='box'>🔔 {{billboard.content}}</div>
  <div class="columns">
    <div class="column is-three-quarters">
      <PIndex></PIndex>
    </div>
    <div class="column">
      <CardBar></CardBar>
    </div>
  </div>
</div>
</template>
<script>
import CardBar from './card/cardbar.vue'
import PIndex from './post/PIndex.vue'
export default {
  name: 'indexmain',
  components: {
    CardBar,
    PIndex
  },
  data () {
    return {
      billboard: '版本更新'
    }
  },
  created () {
    this.GetShow()
  },
  methods: {
    GetShow () {
      this.$store.dispatch('GetShow', {}).then(rs => {
        this.billboard = rs.data
      })
    }
  }
}
</script>
<style lang='less' scoped>
</style>
