<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link :to="'/about/'+aboutId" tag="button">关于</router-link>
    <router-link :to="{path:'/shopList',query:{userId: '9527'}}" tag="button">商品</router-link>
    <button @click="listClick">商品</button>
    <button @click="ifclick">函数</button>
    <button @click="PromiseClick">Promise</button>
    <button @click="allPromiseClick">allPromise</button>
    <keep-alive exclude='about'>
      <router-view >
      </router-view>
    </keep-alive>  
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      aboutId: 'zhangsan'
    }
  },
  methods:{
    listClick () {
      this.$router.push({
        path: '/shopList',
        query: {
          name: 'word'
        }
      })
    },
    allPromiseClick () {
      // let name = [1,6,3]
      // const [na1, na2, na3] = name
      // console.log(na1, na2, na3)
      Promise.all([
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('1')
            resolve('1')   
          }, 2000)
        }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log('2')
            resolve('2')   
          }, 1000)
        })
      ]).then((results) => {
        console.log(results)  
      })
    },
    PromiseClick () {
      new Promise((resolve, reject) => {
        // 第一次网络请求
        setTimeout(() => {
          resolve() 
        }, 2000)
      }).then(() => {
        // 第一次网络请求后处理代码
        console.log('is work');
        console.log('is work');
        console.log('is work');
        console.log('is work');
        return new Promise((resolve, reject) => {
          // 第二次网络请求
          setTimeout(() => {
            resolve()
          }, 2000)
        })
      }).then(() => {
        // 第二次网络请求后处理代码
        console.log('is work2');
        console.log('is work2');
        console.log('is work2');
        console.log('is work2');
        return new Promise((resolve, reject) => {
          // 第三次网络请求
          setTimeout(() => {
            reject('回调失败') // 回调失败时执行reject
          }, 2000)
        })
      }).then(() => {
        // 第三次网络请求后处理代码
        console.log('is work3');
        console.log('is work3');
        console.log('is work3');
        console.log('is work3');
      }).catch((err) => {
        console.log(err);  
      }) 
    },
    ifclick () {
      let Arr = [12, 'config', 19, 'WE', 16, -7]
      let Acc = [132, 321, 34, 366, 298]
      // Arr.forEach((value, index, arr) => {
      //   value, index, arr
      // // 遍历的元素，下标，原数组
      // })
      // // newArr:新数组，val:遍历的元素
      // let newArr=Arr.filter((val) => {
      //   return val < 17   
      // })
      // console.log(newArr)
      // let newAcc = Acc.map((val) => {
      //   return val + 100
      // })
      // console.log(newAcc)
      // new2Arr:新数组，val:遍历的元素, perVal上一次的返回值，0：perVal的初始值
      let new2Acc = Acc.reduce((perVal, val) => {
        return perVal + val
      }, 0)
      console.log(new2Acc)     
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
