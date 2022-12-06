<template>
  <div>{{ movieInfo.Title }}</div>
</template>

<script>
export default {
  props: {
    movieInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
