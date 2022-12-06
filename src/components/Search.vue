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
    <button class="search--botton" @click="serach">Search!</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      year: "",
      number: 5,
      selected: [
        {
          name: "number",
          items: [5, 10, 15, 20],
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
    search() {},
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
