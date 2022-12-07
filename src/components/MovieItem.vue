<template>
  <RouterLink
    :to="`/movie/${movieInfo.imdbID}`"
    :style="{ backgroundImage: `url(${movieInfo.Poster})` }"
    class="movie-item"
  >
    <div class="info">
      <div class="year">
        {{ movieInfo.Year }}
      </div>
      <div class="title">
        {{ movieInfo.Title }}
      </div>
    </div>
  </RouterLink>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      default: () => ({}),
    },
    created() {
      console.log(movieInfo);
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-item {
  $width: 200px;
  position: relative;
  width: $width;
  height: $width * 1.3;
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  background-color: grey;
  background-size: cover;
  &:hover {
    transform: scale(1.2);
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border: 7px solid rgb(232, 232, 0);
    }
  }
  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    text-align: center;
    background-color: rgba(#000, 0.3);
    backdrop-filter: blur(10px);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    font-size: 0.8rem;
  }
  .year {
    color: yellow;
  }
  .title {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
