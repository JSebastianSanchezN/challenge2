<template>
    <h1>{{customTitle}}</h1>
    <span>{{counterNumber}} * {{counterNumber}} = {{getMultiplication}}</span><br/>
    <button @click="increase">+5</button><br/>
    <button @click="decrease">-5</button><br/>
    <button @click="reset">Reset</button><br/>
</template>
<script>
export default {
  props:{
    title:String
  },
    name:'Challenge3',
    data() {
      return {
        counterNumber: 100
      }
    },
    methods:{
      increase(){
        this.counterNumber = this.counterNumber + 5;
      },
      decrease(){
        this.counterNumber = this.counterNumber - 5;
      },
      reset(){
        this.counterNumber = 100
      }
    },
    computed: {
      getMultiplication(){
        console.log('calling method')
        return this.counterNumber * this.counterNumber
    },
    customTitle(){
      return this.title || 'Counter'
    }
  }
}
</script>
<style scoped>
    button{
        background-color: aqua;
        width: 200px;
        height: 100px;
        font-size: 20px;
    }
</style>