<template>
  <div>
    <h3>我是关于</h3>
    <h3>{{$route.params.aboutId}}</h3>
    <keep-alive>
      <input type="text" name="" id="">
    </keep-alive>
    
  </div>
</template>
<script>
export default {
    name:'about',
    data() {
      return {
        isdata: '1232231'
      }
    },
}
</script>