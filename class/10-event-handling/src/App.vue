<template>
  <input
    type="text"
    @keydown.enter="handler" />
</template>

<script>
export default {
    methods: {
        handler(event){
            console.log('Enter!!')
        }
    }
}
</script> 

