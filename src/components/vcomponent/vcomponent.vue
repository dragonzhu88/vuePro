<template>
    <div class="vcomponent">

        <ul>
            <li v-for="msg in toChildMsg"> {{msg.id}} -- {{msg.data}}</li>
        </ul>

    </div>
</template>

<script type="text/ecmascript-6">
export default{
    props: {
        toChildMsg: Array
    }
}
</script>

<style>

</style>