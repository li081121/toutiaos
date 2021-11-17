<template>
<div>
  <div class='box'>🔔 {{billboard.content}}</div>
  <div class="columns">
    <div class="column is-three-quarters">
      <PostIndex></PostIndex>
    </div>
    <div class="column">
      <CardBar></CardBar>
    </div>
  </div>
</div>
</template>
<script>
import CardBar from './card/cardbar.vue'
import PostIndex from './post/postindex.vue'
export default {
  name: 'indexmain',
  components: {
    CardBar,
    PostIndex
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
