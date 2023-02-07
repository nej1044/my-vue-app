<template>
  <RouterLink
    to="/"
    class="logo">
    <span>OMDbAPI</span>.COM
  </RouterLink>
</template>

<style lang="scss" scoped>
.logo {
    font-family: "Oswald", sans-serif;
    font-size: 20px;
    color: $white;
    text-decoration: none;
    background-color: $black;
    &:hover {
        color: $black;
    }
    span {
        color: $primary;
    }
}
</style>