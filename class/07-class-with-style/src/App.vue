<template>
  <h1
    :style="[fontStyle, backgroundStyle]"
    @click="changeStyle">
    Hello!
  </h1>
</template>

<script>
export default {
    data() {
        return {
            // color: 'orange',
            // fontSize: '30px'
            fontStyle: {
                color: 'orange',
                fontSize: '30px'
            },
            backgroundStyle: {
                backgroundColor: 'black'
            }
        }
    },
    methods: {
        changeStyle() {
            this.fontStyle.color = 'red',
            this.fontStyle.fontSize = '50px'
        }
    }
}
</script>

<style scoped>
.active {
    color: red;
    font-weight: bold;
}
</style>