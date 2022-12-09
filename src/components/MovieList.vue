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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">Previous</a>
        </li>
        <li v-if="isValid(totalLength)" class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li
          v-else
          v-for="pageNumber in totalLength"
          :key="pageNumber"
          class="page-item"
        >
          <div @click="searchMoreMovie(pageNumber)" class="page-link" href="#">
            {{ pageNumber }}
          </div>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
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
    totalLength() {
      return this.$store.state.movie.totalLength;
    },
    title() {
      return this.$store.state.movie.title;
    },
    number() {
      return this.$store.state.movie.number;
    },
    year() {
      return this.$store.state.movie.year;
    },
  },
  methods: {
    isValid(number) {
      if (number === 1 || number === 0) {
        return false;
      }
    },
    async searchMoreMovie(pageNumber) {
      this.$store.dispatch("movie/searchMoreMovie", pageNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/scss/custom";
.container {
  margin-top: 60px;
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .Page {
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
}
</style>
