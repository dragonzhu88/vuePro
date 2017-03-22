<template>
    <div id="app">
        {{ msg }}
        <!-- must add : in the front of the parameter so that the value is your data object-->
        <vcomponent :toChildMsg="toClientComponent"></vcomponent>
    </div>
</template>

<script>
    //import component
    import Vcomponent from "./components/vcomponent/vcomponent.vue"
    export default {
      name: 'app',
      data(){
        return {
          msg : 'hello',
          toClientComponent:[
              {
                  id:1,
                  data:'man1'
              },
              {
                  id:2,
                  data:'man2'
              },
              {
                  id:3,
                  data:'man3'
              },
              {
                  id:4,
                  data:'man4'
              }
          ]
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
