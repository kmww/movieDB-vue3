<template>
  <Header />
  <Search />
  <MovieList />
</template>

<script>
import Header from "~/components/Header";
import Search from "~/components/Search";
import MovieList from "~/components/MovieList";
export default {
  components: {
    Header,
    Search,
    MovieList,
  },
};
</script>
