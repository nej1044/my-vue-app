<template>
    <h1 @click="changeMessage">{{ msg }}</h1>
    <h1>{{ reversedMessage }}</h1>
</template>

<script>
export default {
    data() {
        return {
            // Getter, Setter
            msg: 'Hello'
        }
    },
    computed: {
        reversedMessage(){
            return this.msg.split('').reverse().join('')
        }
    },
    watch: {
        msg(newValue) {
            console.log('msg: ', newValue)
        },
        reversedMessage(newValue) {
            console.log('reversedMessage:', newValue)
        }
    },
    methods: {
        changeMessage() {
            this.msg = "Good!"
        }
    }
}
</script>