<template>
  <Header />
  <RouterView />
</template>

<script>
import Header from "~/components/Header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
body {
  background-color: #1e1a1a;
}
</style>
