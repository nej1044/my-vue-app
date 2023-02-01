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
          :class="{active: isMatch(nav.path)}"
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
                    href: '/movie/tt4520988',
                    path: /^\/movie/
                },
                {
                    name: 'About',
                    href: '/about'
                }
            ]
        }
    },
    methods: {
      isMatch(path) {
        if(!path) return false
        return path.test(this.$route.fullPath)
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