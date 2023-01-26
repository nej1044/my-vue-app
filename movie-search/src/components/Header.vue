<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        class="nav-item"
        v-for="nav in navigations"
        :key="nav.name">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo'

export default {
    components: {
        Logo
    },
    data() {
        return {
            navigations: [
                {
                    name:'Search',
                    href: '/'
                },
                {
                    name:'Movie',
                    href: '/movie'
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 40px;
    .logo {
        margin-right: 40px;
    }
}    
</style>