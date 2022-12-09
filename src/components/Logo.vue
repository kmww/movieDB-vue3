<template>
  <RouterLink to="/" class="logo">
    <span>S</span>earch<span>M</span>ovie
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "~/scss/custom";
.logo {
  border: 2px solid $primary;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  text-decoration: none;
  padding: 5px;
  font-weight: 700;
  &:hover {
    color: white;
  }
  span {
    color: $primary;
  }
}
</style>
