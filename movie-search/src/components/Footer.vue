<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/nej1044"
      target="_blank">(c){{ new Date().getFullYear() }} GRACE</a>
  </footer>
</template>

<script>
import Logo from './Logo.vue';

export default {
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
footer {
    padding: 70px 0;
    text-align: center;
    .logo {
        display: block;
        margin-bottom: 4px;
    }
    a {
        padding: 15px 0;
    }
}
</style>