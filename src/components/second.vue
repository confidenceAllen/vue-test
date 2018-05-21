<template>
  <div>
      <h1>第二个页面</h1>
      <p>{{msg}}</p>
      <ul>
        <li class="foods" v-for="(food,index) in foods" :key="index">{{food}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'second',
  data () {
    return {
      msg: '测试双向的第二个页面',
      foods: ['苹果', '雪梨', '香蕉']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foods{
  color:#42b983
}

h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
