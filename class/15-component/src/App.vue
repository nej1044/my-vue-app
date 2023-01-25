<template>
  <h1 ref="helloRef">
    Hello!
  </h1>
</template>

<script>
export default {
    mounted(){
        const helloRef = this.$refs.helloRef
        console.log(helloRef.textContent)
    }
}
</script>