<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="Search IMDb"
      class="form-control form-control-lg"
      @keyup.enter="search"
    />
    <div class="selects">
      <select
        v-for="select in selected"
        v-model="$data[select.name]"
        :key="select.name"
        class="form-select form-select-lg"
      >
        <option v-if="select.name === 'year'" value="">All years</option>
        <option v-for="item in select.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" type="submit" @click="search">
      Search
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      year: "",
      number: 10,
      selected: [
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: Array(new Date().getFullYear() - 1980)
            .fill()
            .map((_, i) => new Date().getFullYear() - i),
        },
      ],
    };
  },
  methods: {
    async search() {
      this.$store.dispatch("movie/searchMovie", {
        title: this.title,
        year: this.year,
        number: this.number,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-top: 60px;
  > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    flex-shrink: 0;
    select {
      width: 150px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 150px;
    font-size: 1.2rem;
    flex-shrink: 0;
    font-weight: 900;
  }
}
</style>
