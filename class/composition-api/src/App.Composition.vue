<template>
  <h1 @click="increase">
    {{ count }} // {{ doublecount }}
  </h1>
  <h1 @click="changeMessage">
    {{ message }} // {{ reversedMessage }}
  </h1>
</template>

<script>
import {ref, computed, watch, onMounted} from 'vue'

export default {
    setup(){
        const count = ref(0)
        const message = ref('Hello World!!')

        const doublecount = computed(()=> count.value * 2)
        const reversedMessage = computed(()=> message.value.split('').reverse().join(''))

        watch(message, newValue => {
            console.log(newValue)
        })

        const increase=()=> count.value++
        const changeMessage =()=> message.value = 'Good!!'

        onMounted(()=> {
            console.log(count.value)
        })

        console.log(message.value)

        return {count, message, increase, changeMessage, doublecount, reversedMessage}
    }
}
</script>