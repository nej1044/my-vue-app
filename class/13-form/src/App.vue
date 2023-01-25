<template>
  <h1>{{ msg }}</h1>
  <input
    type="text"
    v-model.trim="msg" />
  <h1>{{ checked }}</h1>
  <input
    type="checkbox"
    v-model="checked" />
</template>

<script>
export default {
    data(){
        return {
            msg: 'Hello world!',
            checked: false
        }
    },
    watch: {
        msg() {
            console.log(this.msg.trim())
        }
    }
}
</script>