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
      <div
        class="user"
        :style="{backgroundImage: `url(${image})`}"
        @click="toAbout">
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
    computed: {
      image(){
        return this.$store.state.about.image
      },
      name(){
        return this.$store.state.about.name
      }
    },
    methods: {
      isMatch(path) {
        if(!path) return false
        return path.test(this.$route.fullPath)
      },
      toAbout(){
        this.$router.push('/about')
      }
    }
}
</script>

<style lang="scss" scoped>
header {
    position: relative;
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 40px;
    .logo {
        margin-right: 40px;
    }
    .user {
      position: absolute;
      width: 40px;
      height: 40px;
      padding: 6px;
      border-radius: 50%;
      box-sizing: border-box;
      cursor: pointer;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      background-size: cover;
    }
    @include media-breakpoint-down(sm){
      .nav {
        display: none;
      }
    }
}    
</style>