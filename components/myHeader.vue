<script setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const ifScroll = ref(false);
const menuIsActive = ref(false);

const showMenu = () => {
  menuIsActive.value = !menuIsActive.value;
};

onMounted(() => {
  window.addEventListener("scroll", function (event) {
    if (window.scrollY > 50) {
      ifScroll.value = true;
      menuIsActive.value = false
    } else {
      ifScroll.value = false
    }
  });
});
</script>

<template>
  <header class="header">
    <nav :class="['header__nav', { fixed: ifScroll }]">
      <div class="header__nav-content container">
        <div class="header__nav-burger" @click="showMenu">
          <img src="@/assets/images/header/menu.png" alt="Menu" />
        </div>

        <ul :class="['header__nav-menu', { hide: !menuIsActive }]">
          <li class="header__nav-menuItem">
            <span></span>
            <NuxtLink :to="localePath('/')" class="header__nav-menuLink">
              {{ $t("header.navigation.courses") }}
            </NuxtLink>
          </li>
          <li class="header__nav-menuItem">
            <span></span>
            <NuxtLink :to="localePath('/')" class="header__nav-menuLink">
              {{ $t("header.navigation.coworking") }}
            </NuxtLink>
          </li>
          <li class="header__nav-menuItem">
            <span></span>
            <NuxtLink :to="localePath('/')" class="header__nav-menuLink">
              {{ $t("header.navigation.contacts") }}
            </NuxtLink>
          </li>
          <li class="header__nav-menuItem">
            <span></span>
            <NuxtLink :to="localePath('/')" class="header__nav-menuLink">
              {{ $t("header.navigation.location") }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink :to="localePath('/')">
          <img
            src="@/assets/images/header/logo.png"
            class="header__nav-logo"
            alt="logo"
          />
        </NuxtLink>
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <NuxtLink :to="localePath('/')" class="header__nav-link">
              {{ $t("header.navigation.courses") }}
            </NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink :to="localePath('/')" class="header__nav-link">
              {{ $t("header.navigation.coworking") }}
            </NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink :to="localePath('/')" class="header__nav-link">
              {{ $t("header.navigation.contacts") }}
            </NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink :to="localePath('/')" class="header__nav-link">
              {{ $t("header.navigation.location") }}
            </NuxtLink>
          </li>
        </ul>
        <div class="header__nav-locales">
          <NuxtLink :to="switchLocalePath('ru')" v-if="locale !== 'ru'">
            <img src="@/assets/images/header/ru.png" alt="ru-flag" />
          </NuxtLink>
          <NuxtLink :to="switchLocalePath('uz')" v-else>
            <img src="@/assets/images/header/uz.png" alt="uz-flag" />
          </NuxtLink>
        </div>
      </div>
    </nav>
    <div class="header__content container">
      <div class="header__content-content">
        <div class="header__content-titles">
          <h1 class="header__content-title">{{ $t("header.title") }}</h1>
          <button class="header__content-btn">{{ $t("header.start") }}</button>
        </div>
        <div class="header__content-image">
          <img src="@/assets/images/header/header-content.png" alt="web" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  height: 100vh;
  &__nav {
    position: fixed;
    width: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    transition: 0.2s;

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;

      @media (max-width: 992px) {
        height: 40px;
      }
    }

    &.fixed {
      background: rgba(0, 0, 0, 0.574);
      backdrop-filter: blur(10px);
    }

    &-burger {
      display: none;

      @media (max-width: 992px) {
        display: block;
      }
    }

    &-menu {
      background: #ffffff1f;
      max-width: 180px;
      width: 100%;
      padding: 40px 0;
      border-radius: 0 20px 20px 0;
      position: fixed;
      top: 100%;
      left: 0;
      backdrop-filter: blur(15px);
      transition: 0.2s;
      z-index: 999;

      &.hide {
        transform: translateX(-100%);
      }

      & li {
        display: flex;
        align-items: center;

        & span {
          max-width: 20%;
          width: 100%;
          height: 1px;
          background: white;
          display: inline-block;
        }

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }

      & a {
        color: white;
        font-family: var(--MR400);
        font-size: 18px;
        margin-left: 10px;
      }
    }

    &-logo {
      width: 170px;
    }

    &-list {
      display: flex;
      align-items: center;
      gap: 50px;

      @media (max-width: 992px) {
        display: none;
      }
    }

    &-link {
      color: white;
      font-family: var(--MR400);
    }

    &-locales {
      & img {
        width: 40px;
        cursor: pointer;

        &:last-child {
          width: 40px;
        }
      }
    }

    @media (max-width: 1200px) {
      padding: 20px 15px;
    }
  }
  &__content {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;

    @media (max-width: 992px) {
      align-items: center;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      background: linear-gradient(
        264.26deg,
        rgba(27, 38, 59, 0.3) 2.59%,
        rgba(65, 90, 119, 0.3) 102.43%
      );
      box-shadow: 0px 4px 50px 0px #00000040;
      border-radius: 20px 20px 0 0;
      padding: 50px 60px;

      @media (max-width: 992px) {
        flex-direction: column;
      }

      @media (max-width: 768px) {
        padding: 20px 0;
      }

      @media (max-width: 576px) {
        padding: 40px 10px;
        border-radius: 20px;
        justify-content: space-evenly;
      }
    }

    &-titles {
      @media (max-width: 992px) {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    &-title {
      font-family: var(--MB700);
      font-size: 55px;
      color: white;
      line-height: 85px;
      max-width: 200px;
      width: 100%;

      @media (max-width: 992px) {
        max-width: 100%;
        text-align: center;
        font-size: 40px;
        max-width: 500px;
        line-height: 65px;
      }

      @media (max-width: 576px) {
        font-size: 28px;
        line-height: 45px;
      }
    }

    &-btn {
      font-family: var(--MB700);
      font-size: 28px;
      color: #1b263b;
      margin-top: 60px;
      padding: 10px 20px;
      border-radius: 10px;
      border: none;
      cursor: pointer;

      @media (max-width: 992px) {
        margin-top: 40px;
        font-size: 24px;
      }

      @media (max-width: 576px) {
        margin-top: 30px;
        font-size: 18px;
      }
    }

    &-image {
      & img {
        width: 500px;
        animation: upAndDown 2s ease-in-out infinite;
        transition: 0.3s;

        @media (max-width: 1200px) {
          width: 350px;
        }

        @media (max-width: 576px) {
          width: 300px;
        }
      }
    }
  }
}
</style>