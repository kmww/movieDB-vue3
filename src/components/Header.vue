<template>
  <header>
    <div class="nav">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        { name: "Home", href: "/" },
        { name: "Movie", href: "/movie" },
        { name: "About", href: "/about" },
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  padding: 10px;
  .nav-item {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
