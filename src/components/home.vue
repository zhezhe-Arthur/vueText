<template>
    <div>
        <h1>1123</h1>
        <router-link to='/home/isMessage'>消息</router-link>
        <router-link to='/home/isNew'>新闻</router-link>
        <keep-alive>
          <router-view/>
        </keep-alive>        
    </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      path: '/home/isNew'
    }
  },
  created () {
  },
  activated () {
    this.$router.push(this.path) 
  },
  // deactivated() {
  //   console.log('deactivated')   
  // },
  beforeRouteLeave (to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>