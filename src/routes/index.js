import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./Home";
import Movie from "./Movie";
import MoviePage from "./MoviePage";
import NotFound from "./NotFound";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/movie",
      component: MoviePage,
    },
    {
      path: "/movie/:id",
      name: "movieID",
      component: Movie,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
