<template>
  <Search />
  <MovieList />
</template>

<script>
import Search from "~/components/Search";
import MovieList from "~/components/MovieList";
export default {
  components: {
    Search,
    MovieList,
  },
};
</script>
