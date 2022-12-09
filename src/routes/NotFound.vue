<template>
  <div class="not-found">
    <div class="error">404 ERROR</div>
    <div class="message">Sorry. Page Not Found!</div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/scss/custom";

.not-found {
  text-align: center;
  padding: 100px 20px;
  .error {
    font-size: 10rem;
    color: $warning;
  }
  .message {
    color: white;
    font-size: 3.5rem;
  }
}
</style>
