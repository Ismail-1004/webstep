<script setup>
defineProps({
    course: {
        type: Object,
        required: true,
        default: {}
    }
})
</script>

<template>
  <div class="card">
    <img class="card__img" :src="course.img" :alt="course.title" />
    <h2 class="card__title">{{ course.title }}</h2>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  background: linear-gradient(257.65deg, #1b263b -171.23%, #415a77 79.52%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &__img {
    width: 250px;
  }

  &__title {
    color: white;
    font-family: var(--MR400);
    font-size: 25px;
  }
}
</style>