<template>
  <section id="author">
    <el-card class="" shadow="never">
      <div slot="header">
        <span class="has-text-weight-bold">👨‍💻 关于作者</span>
      </div>
      <div class="has-text-centered">
        <p class="is-size-5 mb-5">
          <router-link :to="{ path: `/member/${user.username}/home` }">
            {{ user.alias }} <span class="is-size-7 has-text-grey">{{ '@' + user.username }}</span>
          </router-link>
        </p>
        <div class="columns is-mobile">
          <div class="column is-half">
            <code>{{ user.topicCount }}</code>
            <p>文章</p>
          </div>
          <div class="column is-half">
            <code>{{ user.followerCount }}</code>
            <p>粉丝</p>
          </div>
        </div>
        <div>
          <button
            v-if="hasFollow"
            class="button is-success button-center is-fullwidth"
            @click="handleUnFollow(user.id)"
          >
            已关注
          </button>

          <button v-else class="button is-link button-center is-fullwidth" @click="handleFollow(user.id)">
            关注
          </button>
        </div>
      </div>
    </el-card>
  </section>
</template>

<script>
// import { follow, hasFollow, unFollow } from '../../../src/permission'
// import { mapGetters } from 'vuex'
export default {
  name: 'Author',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      hasFollow: false,
      token: ''
    }
  },
  mounted () {
    this.fetchInfo()
  },
  created () {
    this.token = localStorage.getItem('tokens')
  },
  updated () {
    this.token = localStorage.getItem('tokens')
  },
  methods: {
    fetchInfo () {
      if (this.token !== null && this.token !== '') {
        this.$store.dispatch('IsFollow', { username: this.user.alias, parentId: this.user.id }).then(rs => {
          console.log(rs)
          const { data } = rs
          this.hasFollow = data.hasFollow
        })
      }
    },
    handleFollow: function (id) {
      if (this.token != null && this.token !== '') {
        this.$store.dispatch('Follow', { username: this.user.alias, parentId: this.user.id }).then(rs => {
          const { message } = rs
          this.$message.success(message)
          this.hasFollow = !this.hasFollow
          this.user.followerCount = parseInt(this.user.followerCount) + 1
        })
      } else {
        this.$message.success('请先登录')
      }
    },
    handleUnFollow: function (id) {
      this.$store.dispatch('UnFollow', { username: this.user.alias, parentId: this.user.id }).then(rs => {
        const { message } = rs
        this.$message.success(message)
        this.hasFollow = !this.hasFollow
        this.user.followerCount = parseInt(this.user.followerCount) - 1
      })
    }
  }
}
</script>

<style scoped>

</style>
