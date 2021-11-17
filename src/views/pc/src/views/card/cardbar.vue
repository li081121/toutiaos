<template>
  <section>
    <!--是否登录-->
    <login-welcome />

    <!--今日赠言-->
    <tip-card />

    <!--资源推介-->
    <PromotionCard />
  </section>
</template>

<script>
import TipCard from './Tip.vue'
import PromotionCard from './Promotion'
import LoginWelcome from './LoginWelcome'
export default {
  name: 'cardbar',
  components: { LoginWelcome, PromotionCard, TipCard },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<style>

</style>
