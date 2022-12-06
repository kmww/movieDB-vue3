import { request } from "~/apis/api";
import { API_KEY } from "~/constants/apikey";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  mutations: {
    clearMovies(state) {
      state.movies = [];
    },
    setState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async searchMovie({ commit }, payload) {
      const { title, year, number } = payload;
      const res = await request(
        `apikey=${API_KEY}&s=${title}&y=${year}&page=1`,
        {
          method: "GET",
        }
      );
      const { Search, totalResults } = res;
      console.log(res);
      console.log(Search, totalResults);
      commit("setState", {
        movies: Search,
        loading: true,
      });
    },
  },
};
