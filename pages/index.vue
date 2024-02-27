<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const courses = [
  {
    title: t("courses.programming"),
    img: "/web.png",
    route: localePath("/web-development"),
  },
  {
    title: t("courses.drop"),
    img: "/drop.png",
    route: localePath("/dropshippng"),
  },
  { title: t("courses.smm"), img: "/smm.png", route: localePath("/smm") },
  {
    title: t("courses.scratch"),
    img: "/scratch.png",
    route: localePath("/scratch"),
  },
  {
    title: t("courses.design"),
    img: "/disign.png",
    route: localePath("/disign"),
  },
  { title: t("courses.three"), img: "./3d.png", route: localePath("3ds-max") },
];

const formats = [
  { title: t("format.group"), img: "/s-1.png" },
  { title: t("format.individually"), img: "/s-2.png" },
  { title: t("format.premanetly"), img: "/s-3.png" },
  { title: t("format.online"), img: "/s-4.png" },
];
</script>

<template>
  <div>
    <my-header-content />
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
    <section class="study">
      <div class="study__content container">
        <h2 class="study__content-title">{{ $t("format.title") }}</h2>
        <div class="study__content-formats">
          <div
            class="study__content-item"
            v-for="format in formats"
            :key="format.title"
          >
            <img :src="format.img" :alt="format.title" />
            <h2>{{ format.title }}</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="cowork">
      <div class="cowork__content container">
        <div class="cowork__content-info">
          <h2 class="cowork__content-title">{{ $t("coworking.title") }}</h2>
          <img
            src="@/assets/images/cowork/cowork.png"
            alt="Cowork"
            class="cowork__content-img"
          />
          <p class="cowork__content-text">
            {{ $t("coworking.text") }}
          </p>
        </div>
        <img src="@/assets/images/cowork/cowork.png" alt="Cowork" />
      </div>
    </section>
    <section class="lesson container">
      <lesson-component />
    </section>
    <my-footer />
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

.study {
  padding: 100px 0;
  &__content {
    &-title {
      font-family: var(--MB700);
      font-size: 50px;
      color: white;
      text-align: center;
      margin-bottom: 120px;

      @media (max-width: 768px) {
        font-size: 30px;
      }
    }
    &-formats {
      display: flex;
      padding-bottom: 25px;

      @media (max-width: 1300px) {
        overflow: scroll;
      }

      & h2 {
        color: white;
        font-family: var(--MR400);
        font-size: 25px;
        text-align: center;
        margin-top: 30px;

        @media (max-width: 992px) {
          font-size: 18px;
        }
      }
    }

    &-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
}

.cowork {
  background: white;
  padding: 100px 0;

  @media (max-width: 992px) {
    padding: 80px 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px) {
      justify-content: center;
      & img:last-child {
        display: none;
      }
    }

    &-info {
      @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &-title {
      color: #1b263bda;
      font-size: 50px;
      font-family: var(--MB700);
      margin-bottom: 15px;

      @media (max-width: 992px) {
        margin-bottom: 5px;
      }
    }

    &-text {
      color: #1b263bda;
      font-family: var(--MR400);
      line-height: 32px;
      font-size: 20px;
      max-width: 650px;
      text-align: justify;

      @media (max-width: 992px) {
        text-align: center;
        font-size: 16px;
        line-height: 25px;
      }
    }

    &-img {
      display: none;

      @media (max-width: 992px) {
        display: block;
        width: 300px;
      }
    }
  }
}

.lesson {
  padding: 50px 15px;

  @media (max-width: 576px) {
    padding: 30px 15px;
  }
}
</style>