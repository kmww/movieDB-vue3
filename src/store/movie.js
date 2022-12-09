import axios from "axios";

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
      try {
        if (state.loading) return;

        commit("setState", {
          movies: [],
          loading: true,
        });

        const { title, year, number } = payload;
        const res = await fetchMovie({
          ...payload,
          i: 1,
        });

        const { Search, totalResults } = res.data;
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
            const res = await fetchMovie({
              ...payload,
              i,
            });

            const { Search } = res.data;
            commit("setState", {
              movies: [...state.movies, ...Search],
              loading: false,
              totalLength: pageLength,
            });
          }
        }
      } catch (error) {
        commit("setState", {
          movies: [],
        });
      } finally {
        commit("setState", {
          loading: false,
        });
      }
    },

    async searchMoreMovie({ state, commit }, payload) {
      if (state.loading) return;

      commit("setState", {
        movies: [],
        loading: true,
      });

      const page = parseInt(payload, 10);
      const start = (state.number * (page - 1) + 10) / 10;
      const end = (state.number * page) / 10;

      for (let i = start; i <= end; i += 1) {
        if (i > Math.ceil(state.total / 10)) break;
        const res = await fetchMovie({
          title: state.title,
          year: state.year,
          i,
        });
        const { Search } = res.data;
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
      const res = await fetchMovie({
        id: payload.id,
      });

      window.localStorage.setItem("imdbID", res.data.imdbID);
      commit("setState", {
        movieDetail: res.data,
        loading: false,
      });
    },
  },
};

async function fetchMovie(payload) {
  return await axios.post("/.netlify/functions/workspace", payload);
}
