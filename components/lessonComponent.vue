<template>
  <div class="lesson">
    <h2 class="lesson__title">БЕСПЛАТНЫЙ ОТКРЫТЫЙ УРОК</h2>
    <div class="lesson__content">
      <div class="lesson__content-info">
        <p class="lesson__content-text">
          Перед стартом каждого курса проводятся бесплатные открытые уроки, на
          которых вы получите всю подробную информацию об обучении,
          познакомитесь с преподавателем и сможете записаться.
        </p>
      </div>
      <myForm />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lesson {
  &__title {
    font-family: var(--MB700);
    font-size: 50px;
    color: white;
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 992px) {
      margin-bottom: 40px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 576px) {
        font-size: 35px;
        line-height: 48px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
    }

    &-text {
      font-family: var(--ML300);
      text-align: justify;
      font-size: 24px;
      color: white;
      line-height: 38px;
      max-width: 600px;

      @media (max-width: 1200px) {
        max-width: 400px;
      }

      @media (max-width: 992px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 50px;
      }

      @media (max-width: 768px) {
        font-size: 20px;
      }

      @media (max-width: 576px) {
        font-size: 16px;
        line-height: 30px;
      }
    }
  }
}
</style>