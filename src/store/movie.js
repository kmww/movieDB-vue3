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
    async searchMovie({ state, commit }, payload) {
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

      const total = parseInt(totalResults, 10);
      const pageLength = Math.ceil(total / 10);

      if (pageLength > 1) {
        for (let i = 2; i <= pageLength; i += 1) {
          if (i > number / 10) break;
          const res = await request(
            `apikey=${API_KEY}&s=${title}&y=${year}&page=${i}`,
            {
              method: "GET",
            }
          );
          const { Search } = res;
          commit("setState", {
            movies: [...state.movies, ...Search],
          });
        }
      }
    },
  },
};
