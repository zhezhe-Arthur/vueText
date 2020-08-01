<template>
  <div class="hello">
    <h3> {{newMsg}}</h3>
    <h3>{{num}}</h3>
    <button @click="handNum">修改</button>
    <input type="number" v-model.number="something">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    num: {
      get () {
        return this.msg
      },
      set (val) {
        this.msg = val
        this.newMsg += val
      }  
    }
  },
  methods: {
    handNum () {
      console.log(this.something);
      this.num = 'new' + this.num
    }
  },
  data () {
    return {
      something: null,
      newMsg: 'Hello ',
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
