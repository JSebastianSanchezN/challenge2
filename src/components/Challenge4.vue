<template>
  <input type="text" v-model="newMessage" @keypress.enter="addquote()" />
  {{newMessage}}
  <ul>
    <li v-for="(quote, index) in items">
      {{index +1}}. {{quote.mensaje}}, por {{quote.author}}
    </li>
  </ul>
</template>

<script>
export default {
    name: 'Challenge4',
    data() {
      return {
        newMessage:'',
        items:[
          {mensaje: 'Foo',author:'Juan',edad:'18'},
          {mensaje: 'Bar',author:'Pedro',peso:'58kg'}
        ]
      }
    },
    methods:{
      addquote(){
        this.items.unshift({
          mensaje:this.newMessage,
          author:'JLo'
        }
        );
      }
  }
}
</script>

<style scoped>
li{
  font-size: 50px;
}
</style>