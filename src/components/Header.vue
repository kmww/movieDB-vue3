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
};
</script>
