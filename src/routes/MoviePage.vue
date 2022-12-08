<template>
  <div class="container">
    <p>
      <span class="lg">S</span>earch <br />
      <span class="lg">F</span>or the movie <br />
      <span class="lg">W</span>hat you want!
    </p>
  </div>
</template>

<script>
export default {
  created() {
    const imdbId = localStorage.getItem("imdbID");
    if (imdbId) {
      this.$router.push(`/movie/${imdbId}`);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/custom";
.container {
  margin-top: 60px;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-content: center;
  color: white;
  line-height: 100px;
  word-wrap: wrap;
  p {
    .lg {
      font-size: 120px;
      color: $primary;
    }
  }
}
</style>
