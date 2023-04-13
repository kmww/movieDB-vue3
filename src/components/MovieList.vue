<template>
  <Loading v-if="isLoading" />
  <div v-else class="container">
    <div class="inner">
      <div
        v-show="errorMessage.length > 0 ? true : false"
        class="error-message">
        {{ errorMessage }}
      </div>
      <div class="movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movieInfo="movie" />
      </div>
      <nav
        v-if="totalLength > 1"
        aria-label="Page navigation"
        class="navigation">
        <ul class="pagination">
          <li v-if="currentPage > 1" class="page-item">
            <button @click="searchMoreMovie(currentPage - 1)" class="page-link">
              이전
            </button>
          </li>
          <li
            v-for="pageNumber in getPageNumbers"
            :key="pageNumber"
            :class="['page-item', { active: currentPage === pageNumber }]">
            <button @click="searchMoreMovie(pageNumber)" class="page-link">
              {{ pageNumber }}
            </button>
          </li>
          <li v-if="currentPage < totalLength" class="page-item">
            <button @click="searchMoreMovie(currentPage + 1)" class="page-link">
              다음
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem';
import Loading from '~/components/Loading';
import { mapState } from 'vuex';

export default {
  components: {
    MovieItem,
    Loading,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    ...mapState('movie', {
      movies: 'movies',
      totalLength: 'totalLength',
      isLoading: 'loading',
      errorMessage: 'errorMsg',
    }),
    getPageNumbers() {
      const pageNumbers = [];
      for (let i = 1; i <= this.totalLength; i++) {
        pageNumbers.push(i);
      }
      const currentPageIndex = pageNumbers.indexOf(this.currentPage);
      let start = currentPageIndex - 2;
      let end = currentPageIndex + 2;
      if (start < 0) {
        end += Math.abs(start);
        start = 0;
      }
      if (end > pageNumbers.length - 1) {
        start -= end - (pageNumbers.length - 1);
        end = pageNumbers.length - 1;
      }
      return pageNumbers.slice(start, end + 1);
    },
  },
  methods: {
    async searchMoreMovie(pageNumber) {
      this.currentPage = pageNumber;
      this.$store.dispatch('movie/searchMoreMovie', pageNumber);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
  .error-message {
    color: $warning;
    font-size: 2rem;
    font-weight: 700;
  }
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
