<template>
  <Loading v-if="isLoading" />
  <div v-else class="container">
    <div class="movie-details">
      <div class="movie-image">
        <div
          :style="{
            backgroundImage: `url(${diffSizePoster(movieDetail.Poster)})`,
          }"
          class="poster"
        ></div>
        <div class="ratings">
          <div
            class="rating-wrap"
            v-for="rating in movieDetail.Ratings"
            :key="rating.Source"
          >
            <span class="rating-title">{{ rating.Source }}</span>
            <span class="rating-value">{{ rating.Value }}</span>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="title">
          {{ movieDetail.Title }}
        </div>
        <div class="genre">
          <span
            v-for="genre in movieDetail.Genre.split(',')"
            :key="genre"
            class="badge text-bg-primary"
            >{{ genre }}</span
          >
        </div>
        <div class="labels">
          <span>{{ movieDetail.Type }}</span>
          <span>{{ movieDetail.Released }}</span>
          <span>{{ movieDetail.Runtime }}</span
          ><br />
          <span>{{ movieDetail.Country }}</span>
        </div>
        <div class="plot">
          <h3>Outline</h3>
          {{ movieDetail.Plot }}
        </div>
        <h3>Director</h3>
        {{ movieDetail.Director }}
        <h3>Writer</h3>
        {{ movieDetail.Writer }}
        <h3>Actors</h3>
        {{ movieDetail.Actors }}
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "~/components/Loading";

export default {
  components: {
    Loading,
  },
  computed: {
    movieDetail() {
      return this.$store.state.movie.movieDetail;
    },
    isLoading() {
      return this.$store.state.movie.loading;
    },
  },
  created() {
    this.$store.dispatch("movie/searchMovieDetail", {
      id: this.$route.params.id,
    });
  },
  methods: {
    diffSizePoster(url) {
      return url.replace("SX300", "SX700");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 40px;
  .movie-details {
    display: flex;
    color: #ffffff;
    .movie-image {
      .poster {
        width: 500px;
        height: 500px * 1.3;
        margin-right: 70px;
        margin-bottom: 20px;
        border-radius: 10px;
        background-color: grey;
        background-size: cover;
        background-position: center;
        flex-shrink: 0;
      }
      .ratings {
        display: flex;
        width: 500px;
        .rating-wrap {
          display: flex;
          flex-direction: column;
          width: calc(500px / 3);
          border: 1px solid $info;
          border-radius: 10px;
          margin-right: 4px;
          .rating-title {
            font-weight: 700;
            font-size: 1.3rem;
            text-align: center;
            color: $info;
          }
          .rating-value {
            font-weight: 700;
            font-size: 1.2rem;
            text-align: center;
          }
        }
      }
    }
    .info {
      .title {
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 10px;
      }
      .labels {
        margin-bottom: 40px;
        span {
          color: $info;
          &::before {
            content: "\00B7";
            margin: 0 5px;
          }
          &:first-child::before {
            content: "";
            margin: 0;
          }
          &:last-child::before {
            content: "";
          }
        }
      }
      .plot {
        margin-top: 20px;
      }
      .genre {
        .badge {
          margin-right: 10px;
          margin-bottom: 10px;
          width: 100px;
          border-radius: 10px;
          overflow: hidden;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      h3 {
        color: $info;
        margin: {
          top: 20px;
          bottom: 5px;
        }
        font-size: 30px;
      }
    }
  }
}
</style>
