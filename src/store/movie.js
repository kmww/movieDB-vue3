import { API_KEY } from "~/constants/apikey";
import { request } from "~/apis/api";

export default {
  namespaced: true,
  state() {
    return {
      movies: [],
      loading: false,
      movieDetail: {},
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
        loading: true,
      });

      try {
        const { title, year, number } = payload;
        const res = await request(
          `apikey=${API_KEY}&s=${title}&y=${year}&page=1`,
          {
            method: "GET",
          }
        );
        const { Search, totalResults } = res;

        commit("setState", {
          movies: Search,
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
      } catch (error) {
        throw new Error(error.message);
      } finally {
        commit("setState", {
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

      try {
        const res = await request(`apikey=${API_KEY}&i=${payload.id}`, {
          method: "GET",
        });
        commit("setState", {
          movieDetail: res,
        });
      } catch (error) {
        throw new Error(error.message);
      } finally {
        commit("setState", {
          loading: false,
        });
      }
    },
  },
};
