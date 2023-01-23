<template>
    <button @click="add">ADD</button>
    <h1>{{ reversedMessage }}</h1>
    <h1>{{ reversedMessage }}</h1>
    <h1>{{ reversedMessage }}</h1>
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
        // Getter
        // reversedMessage() {
        //     return this.msg.split('').reverse().join('')
        // }
        reversedMessage: {
            get() {
                return this.msg.split('').reverse().join('')
            }, set(newValue) {
                this.msg = newValue
            }
        }
    },
    methods: {
        add() {
            this.reversedMessage += '!?'
        }
    }
}
</script>