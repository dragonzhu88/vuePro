<template>
    <div id="app">
        {{ msg }}

        <vcomponent></vcomponent>
    </div>
</template>

<script>
    //import component
    import Vcomponent from "./components/vcomponent/vcomponent.vue"
    export default {
      name: 'app',
      data(){
        return {
          msg : 'hello'
        }
      },
    //add component
      components:{
         Vcomponent
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
