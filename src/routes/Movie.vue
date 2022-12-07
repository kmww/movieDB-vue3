<template>
  <div class="movie-details">
    <div
      :style="{ backgroundImage: `url(${movieDetail.Poster})` }"
      class="poster"
    ></div>
    <div class="info">
      <div class="title">
        {{ movieDetail.Title }}
      </div>
      <div class="labels">
        <span>{{ movieDetail.Released }}</span>
        <span>{{ movieDetail.Runtime }}</span>
        <span>{{ movieDetail.Country }}</span>
      </div>
      <div class="plot">
        <h3>Outline</h3>
        {{ movieDetail.Plot }}
      </div>

      <div>
        <h3>Actors</h3>
        {{ movieDetail.Actors }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetail() {
      return this.$store.state.movie.movieDetail;
    },
  },
  created() {
    this.$store.dispatch("movie/searchMovieDetail", {
      id: this.$route.params.id,
    });
  },
};
</script>

<style lang="scss" scoped>
.movie-details {
  display: flex;
  color: #ffffff;
  .poster {
    width: 500px;
    height: 500px * 1.3;
    margin-right: 70px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
  }
  .info {
    .title {
      font-size: 5rem;
      font-weight: bold;
      margin-bottom: 50px;
    }
    .labels {
      span {
        &::before {
          content: "\00B7";
          margin: 0 5px;
        }
        &:first-child::before {
          content: "";
          margin: 0;
        }
      }
    }
    .plot {
      margin-top: 20px;
    }
    h3 {
      margin: {
        top: 20px;
        bottom: 5px;
      }
      font-size: 30px;
    }
  }
}
</style>
