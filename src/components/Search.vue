<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      placeholder="please enter movie title"
      class="title--input"
      @keyup.enter="search"
    />
    <div class="selects">
      <select
        v-for="select in selected"
        v-model="$data[select.name]"
        :key="select.name"
        class="select"
      >
        <option v-if="select.name === 'year'" value="">All years</option>
        <option v-for="item in select.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="search--botton" @click="search">Search!</button>
  </div>
</template>

<script>
import { request } from "~/apis/api";
import { OMDB_API_KEY } from "~/constants/apikey";

export default {
  data() {
    return {
      title: "",
      year: "",
      number: 5,
      selected: [
        {
          name: "number",
          items: [10, 20, 30],
        },
        {
          name: "year",
          items: (() => {
            const years = [];
            const curYear = new Date().getFullYear();
            for (let i = curYear; i >= 1980; i -= 1) {
              years.push(i);
            }
            return years;
          })(),
        },
      ],
    };
  },
  methods: {
    async search() {
      const res = await request(
        `apikey=${OMDB_API_KEY}&s=${this.title}&y=${this.year}&page=1`,
        {
          method: "GET",
        }
      );
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  .title--input {
    width: 300px;
  }
  > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 100px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
