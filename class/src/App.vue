<template>
        <h1 @click="increase">
            {{ count }}
        </h1>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            increase() {
                this.count += 1
            }
        }
    }
</script>

<style>
    h1 {
        color: royalblue;
        font-size: 50px;
    }
</style>