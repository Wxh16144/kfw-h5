<template>
  <div class="wrap">
    <img class="arrow__img"
         src="@/assets/images/arrows.png">
  </div>
</template>

<script>
export default {
  name: 'arrow'
}
</script>

<style scoped lang='scss'>
.wrap {
  .arrow__img {
    position: absolute;
    width: 70px;
    bottom: 50px;
    left: 46%;
    transform: translate(-50%, 0);
    animation: start 1.8s infinite ease-in-out;
    z-index: 993;
  }
  @keyframes start {
    0%,
    30% {
      opacity: 0;
      transform: translate(0, 20px);
    }
    60% {
      opacity: 1;
      transform: translate(0, 0);
    }
    100% {
      opacity: 0;
      transform: translate(0, -16px);
    }
  }
}
</style>
