<template>
    <h1 :[attr]="active" @[event]="add">{{ msg }}</h1>
</template>

<script>
export default {
    data() {
        return {
            msg: 'active',
            attr: 'class',
            evnet: 'click'
        }
    },
    methods: {
        add() {
            this.msg += '!'
        }
    }
}
</script>

<style>
    .active {
        color: royalblue;
        font-size: 100px;
    }
</style>