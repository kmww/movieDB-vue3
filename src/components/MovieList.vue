<template>
  <Loading v-if="isLoading" />
  <div v-else class="container">
    <div class="inner">
      <div class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movieInfo="movie"
        />
      </div>
      <nav v-if="movies.length" aria-label="Page navigation" class="navigation">
        <ul class="pagination">
          <li v-if="isValid(totalLength)" class="page-item">
            <button class="page-link">1</button>
          </li>

          <li
            v-else
            v-for="pageNumber in totalLength"
            :key="pageNumber"
            class="page-item"
          >
            <button @click="searchMoreMovie(pageNumber)" class="page-link">
              {{ pageNumber }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MovieItem from "~/components/MovieItem";
import Loading from "~/components/Loading";
export default {
  components: {
    MovieItem,
    Loading,
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    totalLength() {
      return this.$store.state.movie.totalLength;
    },
    isLoading() {
      return this.$store.state.movie.loading;
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
  .navigation {
    margin-top: 60px;
    padding-right: 100px;
    padding-left: 100px;
    box-sizing: border-box;
    .pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      .page-item {
        color: $primary;
        .page-link {
          background-color: transparent;
          border-color: #444;
          margin-bottom: 1px;
        }
      }
    }
  }
}
</style>
