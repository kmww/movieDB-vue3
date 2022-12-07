<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from "~/components/Header";
import Search from "~/components/Search";

export default {
  components: {
    Header,
    Search,
  },
};
</script>

<style lang="scss">
body {
  background-color: #1e1a1a;
}
</style>
