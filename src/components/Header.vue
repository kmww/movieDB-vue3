<template>
  <header>
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink :to="nav.href" class="nav-link" active-class="active">
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
        { name: "Details", href: `/movie` },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/custom";
.nav {
  color: white;
  font-weight: 800;
  display: flex;
  padding: 10px;
  .nav-item {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
