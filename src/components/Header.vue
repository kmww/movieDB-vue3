<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <RouterLink
          :to="nav.path"
          :class="{ active: isMatchLink(nav.match) }"
          class="nav-link"
          active-class="active"
        >
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigations: [
        { name: "Home", path: "/" },
        { name: "Details", path: `/movie`, match: "movie" },
      ],
    };
  },
  methods: {
    isMatchLink(match) {
      if (!match) return false;
      return this.$route.fullPath.split("/").includes(match);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/custom";
header {
  display: flex;
  align-items: center;
  .logo {
    margin-right: 20px;
  }
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
}
</style>
