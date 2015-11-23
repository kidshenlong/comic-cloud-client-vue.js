<template>
    <ccheader></ccheader>
    <router-view></router-view>
</template>
<script>
    import ccheader from './components/ccheader.vue'
    export default{
        components : {
            ccheader
        }
    }
</script>
<style>
    body {
        background-color: pink;
    }
</style>