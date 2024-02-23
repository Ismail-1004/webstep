<script setup>
const { t } = useI18n();

const courses = [
  { title: t("courses.programming"), img: "/web.png" },
  { title: t("courses.drop"), img: "/drop.png" },
  { title: t("courses.smm"), img: "/smm.png" },
  { title: t("courses.scratch"), img: "/scratch.png" },
  { title: t("courses.design"), img: "/disign.png" },
  { title: t("courses.three"), img: "./3d.png" },
];
</script>

<template>
  <div>
    <section class="courses">
      <div class="courses__content">
        <course-card
          v-for="course in courses"
          :key="course.title"
          :course="course"
        />
      </div>
    </section>
    <section class="we">
      <div class="we__content container">
        <div>
          <h2 class="we__content-title">{{ $t("whyWe.title") }}</h2>
          <img src="@/assets/images/we/why-media.png" alt="why we" />
          <p class="we__content-text">{{ $t("whyWe.text") }}</p>
        </div>
        <img src="@/assets/images/we/why.png" alt="why we" />
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.courses {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 992px) {
      grid-template-columns: repeat(6, 1fr);
      overflow: scroll;
    }
  }
}

.we {
  background: white;
  padding: 100px 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 70px 0;
  }

  &__content {
    display: flex;
    align-items: center;

    & div {
        img {
            display: none;

            @media (max-width: 992px) {
                display: block;
            }

            @media (max-width: 768px) {
                width: 200px;
            }
        }

        @media (max-width: 992px) {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    &-title {
      font-size: 50px;
      font-family: var(--MB700);
      margin-bottom: 30px;
      color: #1b263bda;

      @media (max-width: 992px) {
        text-align: center;
        margin-bottom: 15px;
      }

      @media (max-width: 768px) {
        font-size: 40px;
      }

      @media (max-width: 576px) {
        font-size: 25px;
      }
    }

    &-text {
      font-size: 22px;
      line-height: 40px;
      font-family: var(--MR400);
      text-align: justify;
      width: 100%;

      @media (max-width: 992px) {
        text-align: center;
      }

      @media (max-width: 768px) {
        font-size: 18px;
      }

      @media (max-width: 576px) {
        font-size: 14px;
        line-height: 30px;
      }
    }

    & img {
      &:last-child {
        position: absolute;
        right: 0;
        width: 210px;
        top: -20%;

        @media (max-width: 1200px) {
          width: 180px;
          top: -15%;
        }

        @media (max-width: 992px) {
          display: none;
        }
      }
    }
  }
}
</style>