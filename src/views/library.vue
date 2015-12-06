<style scoped>
    .shelf {
        padding:0;
        padding-top: 50px;
        margin:0;
    }
</style>

<template>
    <ul class="shelf">
        <li v-for="item in items">
            {{ item.message }}
        </li>
    </ul>
</template>
<script>
    export default{
        data () {
            return {
                items: [
                    { message: 'Foo' },
                    { message: 'Bar' }
                ]
            }
        }
    }
</script>