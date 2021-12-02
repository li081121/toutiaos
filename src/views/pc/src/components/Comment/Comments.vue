<template>
  <section class="box comments">
    <hr />
    <h3 class="title is-5">Comments</h3>
    <lv-comments-form :slug="slug" v-if="token" @loadComments="fetchComments"/>

    <lv-comments-item
      v-for="comment in comments"
      :key="`comment-${comment.id}`"
      :comment="comment"
    />
  </section>
</template>

<script>
import LvCommentsForm from './CommentsForm'
import LvCommentsItem from './CommentsItem'

export default {
  name: 'LvComments',
  components: {
    LvCommentsForm,
    LvCommentsItem
  },
  data () {
    return {
      comments: [],
      tokens: ''
    }
  },
  props: {
    slug: {
      type: String,
      default: null
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.token = localStorage.getItem('tokens')
  },
  updated () {
    this.token = localStorage.getItem('tokens')
  },
  async mounted () {
    await this.fetchComments(this.slug)
  },
  methods: {
    // 初始化
    async fetchComments (topicId) {
      this.$store.dispatch('getCommentList', { tocpid: topicId }).then(rs => {
        const { data } = rs
        this.comments = data
      })
    }
  }
}
</script>
