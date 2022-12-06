<template>
  <div class="cotainer">
    <div class="inner">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID"
        :movieInfo="movie"
      />
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
