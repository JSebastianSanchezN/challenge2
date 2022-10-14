<template>
  <h1>{{title}}</h1>
  <img :src='imagen'/>
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" placeholder="Hazme una pregunta" v-model="question" @keypress.?="llamado()"/>
      <p>Recuerda finalizar con signo de interrogacion (?)</p>
  </div>
  <div>
      <h2>{{question}}</h2>
      <h1>{{resultado}}</h1>
  </div>
</template>

<script>
  export default {
  props:{
    title: String,
    start:{
      type: Number,
      default: 10,
      required: false,
      validator: (value)=>{
        return value >= 0
      }
    }
  },
  name: 'Challenge6',
  data(){
      return{
          question:'',
          resultado:'',
          imagen:''
      }
  },
  methods:{
      async llamado(){
          const api = await fetch('https://yesno.wtf/api');
          const data = await (api.json());
          console.log(data)
          this.imagen=data.image
          this.resultado=data.answer
          return data;
      }
  }
}
</script>

<style scoped>
</style>