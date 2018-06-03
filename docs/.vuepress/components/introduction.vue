<template>
  <div>
    <h2>test</h2>
    <h4>{{message}}</h4>
    <ul>
      <li v-for='n in 5'>test</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'hello Xiaodan'
      }
    }
  }
</script>

<style lang="scss" scoped>
  h4 {
    color: red;
  }
</style>