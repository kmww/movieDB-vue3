<template>
  <div class="container">
    <div class="inner">
      <div class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movieInfo="movie"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from "~/components/MovieItem";

export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
