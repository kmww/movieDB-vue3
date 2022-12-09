import { API_KEY } from "~/constants/apikey";
import { request } from "~/apis/api";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      loading: false,
      movieDetail: {},
      totalLength: 1,
      total: null,
      title: null,
      year: "",
      number: null,
    };
  },
  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },

  actions: {
    async searchMovie({ state, commit }, payload) {
      if (state.loading) return;

      commit("setState", {
        movies: [],
        loading: true,
        title: null,
        year: "",
        number: null,
        total: null,
      });

      const { title, year, number } = payload;
      const res = await request(
        `apikey=${API_KEY}&s=${title}&y=${year}&page=1`,
        {
          method: "GET",
        }
      );

      const { Search, totalResults } = res;
      const total = parseInt(totalResults, 10);
      const pageLength = Math.ceil(total / number);

      commit("setState", {
        movies: Search,
        loading: false,
        totalLength: pageLength,
        total: totalResults,
        title,
        year,
        number,
      });

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
            loading: false,
            totalLength: pageLength,
          });
        }
      }
    },
    async searchMoreMovie({ state, commit }, payload) {
      if (state.loading) return;

      commit("setState", {
        movies: [],
        loading: true,
      });

      // 1: 1~3  2: 4~6 3: 7~9
      // (pageNumber * number / 10) = 6
      // (pageNumber * number / 10) - (number / 10) + 1 = 4
      const page = parseInt(payload, 10);
      for (
        let i = (page * state.number) / 10 - state.number / 10 + 1;
        i <= (page * state.number) / 10;
        i += 1
      ) {
        if (i > Math.ceil(state.total / 10)) break;
        console.log(i);
        const res = await request(
          `apikey=${API_KEY}&s=${state.title}&y=${state.year}&page=${i}`,
          {
            method: "GET",
          }
        );
        const { Search } = res;
        commit("setState", {
          movies: [...state.movies, ...Search],
          loading: false,
        });
      }
    },

    async searchMovieDetail({ state, commit }, payload) {
      if (state.loading) return;

      commit("setState", {
        loading: true,
        movieDetail: {},
      });

      const res = await request(`apikey=${API_KEY}&i=${payload.id}`, {
        method: "GET",
      });
      window.localStorage.setItem("imdbID", res.imdbID);
      commit("setState", {
        movieDetail: res,
        loading: false,
      });
    },
  },
};
