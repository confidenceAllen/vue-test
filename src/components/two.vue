<template>
  <div>
      <h1>第二个子页面</h1>
      <p>{{author}}</p>
  </div>
</template>

<script>
export default {
  name: 'two',
  data () {
    return {
      author: '现在更改一点东西'
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
