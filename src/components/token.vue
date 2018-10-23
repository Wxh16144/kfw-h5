<template>
  <div class="token">
    <!-- 用户授权页面 -->
    <p>授权中...</p>
  </div>
</template>
<script>
export default {
  data () {
    const {token, name = 'index'} = this.$route.params
    return {
      token,
      name
    }
  },
  mounted () {
    // 存入 auth
    window.localStorage.setItem('auth', this.token)
    // this.$store.commit('updateAuth', this.token)
    setTimeout(() => {
      this.$router.replace({
        name: this.name
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.token{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  p{
    font-family: myfont;
    color: #735328;
    font-size: 1.2rem;
    text-align: center;
  }
}
</style>
