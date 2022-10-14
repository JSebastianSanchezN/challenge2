<template>
  <img src="https://via.placeholder.com/250"/>
  <input type="text" placeholder="Haz una pregunta" v-model="question"/>
  <h2>{{question}}</h2>
</template>

<script>
export default {
    name: 'Challenge4',
    data() {
      return {
        question:''
      }
  }
}
</script>

<style scoped>
li{
  font-size: 50px;
}
</style>