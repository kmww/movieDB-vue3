<template>
  <span class="loader"></span>
</template>

<style lang="scss">
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;
  display: block;
  position: fixed;
  z-index: 9999;
  top: calc(50% - (48px / 2));
  right: calc(50% - (48px / 2));
}
.loader:after {
  content: "";
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: scaleUp 1s linear infinite;
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes pulse {
  0%,
  60%,
  100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
}
</style>
