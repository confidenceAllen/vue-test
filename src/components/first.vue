<template>
  <div>
      <h1>第一个页面</h1>
      <input type="text" v-model="author">
      <button type="button" @click="add" @keyup.enter="add">添加</button>
      <ul>
        <li v-for="(name,index) in names" :key="index" :index="index">{{name}}<span @click="deleteName(index)">*</span></li>
      </ul>
      <button @click="show = !show">展示</button>
      <transition name="fade">
        <p v-if="show">你好！</p>
      </transition>

      <button @click="axiosGet">axios测试</button>

      <ul>
        <!-- {{mydata}} -->
        <li v-for="(data,index) in mydata.obj" :key="index">{{data}}</li>
      </ul>

  </div>
</template>

<script>
export default {
  name: 'first',
  data () {
    return {
      author: '必颖',
      names: [],
      show: true,
      mydata: {}
    }
  },
  methods: {
    add () {
      this.names.push(this.author)
      this.author = ''
    },
    deleteName (index) {
      this.names.splice(index, 1)
    },
    axiosGet () {
      let that = this
      this.axios({
          method: 'post',
          url: 'hello',
          }).then(function ( response) {
            that.mydata = response.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
