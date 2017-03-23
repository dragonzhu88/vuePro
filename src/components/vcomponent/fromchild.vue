<template>
    <!-- bundle a function which can trigger emit() -->
    <button v-on:click="onClick">Click</button>
</template>

<script type="text/ecmascript-6">
export default{
    data(){
        return {
            msg:'from child msg'
        }
    },
    methods:{
        //define the function which contain $emit() to sent event to father component
        onClick:function () {
            this.$emit('fromChild',this.msg)
        }
    }

}
</script>

<style>

</style>