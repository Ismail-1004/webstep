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
  <NuxtLink :to="course.route" class="link">
    <div class="card">
      <img class="card__img" :src="course.img" :alt="course.title" />
      <h2 class="card__title">{{ course.title }}</h2>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.link {
  height: 100%;
}
.card {
  width: 100%;
  height: 100%;
  background: linear-gradient(257.65deg, #1b263b -171.23%, #415a77 79.52%);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &__img {
    width: 250px;
    text-align: center;
  }

  &__title {
    color: white;
    font-family: var(--MR400);
    font-size: 25px;
    text-align: center;
  }
}
</style>