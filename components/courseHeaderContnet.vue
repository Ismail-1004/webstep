<template>
  <div class="header__content container">
    <div class="header__content-content">
      <h1 class="header__content-title">ВЕБ ПРОГРАММИРОВАНИЕ</h1>
      <div class="header__content-info">
        <div class="header__content-image">
          <img
            src="@/assets/images/header/header-content.png"
            alt="Web Development"
          />
        </div>
        <div class="header__content-about">
          <p class="header__content-text">
            На курсе ВЕБ ПРОГРАММИРОВАНИЯ вы изучите основные языки
            программирования, научитесь создавать современные сайты,
            познакомитесь с инструментами, которые используют успешные
            веб-разработчики.
          </p>
          <div class="header__content-btn-container">
            <button class="header__content-btn">Записаться на курс</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__content {
    height: 100vh;
    display: flex;
    align-items: center;

    &-content {
      width: 100%;

      background: linear-gradient(
        264.26deg,
        rgba(27, 38, 59, 0.3) 2.59%,
        rgba(65, 90, 119, 0.3) 102.43%
      );
      box-shadow: 0px 4px 50px 0px #00000040;
      border-radius: 20px;
      padding: 30px 40px;

      @media (max-width: 992px) {
        flex-direction: column;
        padding: 25px 0;
      }

      @media (max-width: 768px) {
        padding: 20px 15px;
      }

      @media (max-width: 576px) {
        padding: 40px 15px;
        border-radius: 20px;
        justify-content: space-evenly;
      }
    }

    &-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 992px) {
        flex-direction: column;
        align-items: center;
      }
    }

    &-title {
      font-family: var(--MB700);
      font-size: 55px;
      color: white;
      line-height: 85px;
      width: 100%;
      text-align: center;

      @media (max-width: 992px) {
        max-width: 100%;
        text-align: center;
        font-size: 40px;
      }

      @media (max-width: 768px) {
        font-size: 35px;
      }

      @media (max-width: 576px) {
        font-size: 25px;
        line-height: 35px;
        text-align: center;
      }
    }

    &-about {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &-text {
      max-width: 600px;
      font-size: 25px;
      font-family: var(--ML300);
      text-align: justify;
      color: white;
      line-height: 40px;

      @media (max-width: 992px) {
        font-size: 20px;
        line-height: 30px;
      }

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 25px;
      }

      @media (max-width: 576px) {
        font-size: 14px;
        line-height: 23px;
        text-align: center;
      }
    }

    &-btn {
      font-family: var(--MB700);
      font-size: 28px;
      border: none;
      cursor: pointer;
      background: linear-gradient(to left, #1b263b 11.36%, #415a77 84.77%);
      -webkit-background-clip: text;
      background-clip: text; /* Для поддержки Firefox */
      -webkit-text-fill-color: transparent;
      color: #0b2349;
      display: table;

      &-container {
        background: white;
        padding: 10px 20px;
        border-radius: 10px;
        margin-top: 60px;
        display: inline-block;

        @media (max-width: 992px) {
          margin-top: 30px;
        }
      }

      @media (max-width: 992px) {
        font-size: 24px;
      }

      @media (max-width: 576px) {
        font-size: 18px;
      }
    }

    &-image {
      & img {
        width: 450px;
        animation: upAndDown 2s ease-in-out infinite;
        transition: 0.3s;

        @media (max-width: 1200px) {
          width: 350px;
        }

        @media (max-width: 768px) {
            width: 300px;
        }

        @media (max-width: 576px) {
            width: 270px;
        }
      }
    }
  }
}
</style>