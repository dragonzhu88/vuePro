<template>
    <div id="app">
        {{ msg }}
        {{childMsg}}
        <!-- must add : in the front of the parameter so that the value is your data object-->
        <vcomponent :toChildMsg="toClientComponent"></vcomponent>
        <!-- bundle a function to receive value from which child emitted-->
        <fromchild v-on:fromChild="childMsgFun"></fromchild>

        <div class="tab">
            <div class="tab-item">
                <router-link to="/component1" class="tabLink">组件1</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/component2" class="tabLink">组件2</router-link>
            </div>
        </div>

        <router-view></router-view>

    </div>
</template>

<script type="text/ecmascript-6">
    //import component
    import Vcomponent from "./components/vcomponent/vcomponent.vue"
    import Fromchild from "./components/vcomponent/fromchild.vue"
    export default {
        name: 'app',
        data(){
            return {
                msg: 'hello',
                toClientComponent: [
                    {
                        id: 1,
                        data: 'man1'
                    },
                    {
                        id: 2,
                        data: 'man2'
                    },
                    {
                        id: 3,
                        data: 'man3'
                    },
                    {
                        id: 4,
                        data: 'man4'
                    }
                ],
                childMsg: '',
                dataFromServer: {}
            }
        },
        //add component
        components: {
            Vcomponent, Fromchild
        },
        methods: {
            //define the function to save the child value
            childMsgFun: function (msg) {
                this.childMsg = msg
            }
        },
        created(){
            // GET /someUrl
            this.$http.get('/static/server.json').then(response => {

                // get body data
                this.dataFromServer = response.body;
                console.log( this.dataFromServer);

            }, response => {
                // error callback
            });

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

    #app .tab{
        display:flex;
        width: 100%;
        height: 40px;
        line-height:40px;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        position: relative;
    }
    #app .tab .tab-item{
        flex:1;
        text-align: center;
    }

    #app > .tab > .tab-item > .tabLink{
        display: block;
        font-size: 14px;
        color:rgb(77,85,93)
    }

    #app > .tab > .tab-item > .router-link-active{
        display: block;
        font-size: 14px;
        color:rgb(240,20,20)
    }
</style>
