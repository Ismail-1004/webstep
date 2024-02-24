<template>
  <footer class="footer">
    <div class="footer__content container">
      <h2 class="footer__content-title">
        Работать нужно не 12 часов, а головой
      </h2>
      <div class="footer__content-contacts">
        <a href="telto:+998888008898" class="footer__content-number">
          +998 88 800 88 98
        </a>
        <div class="footer__content-social">
          <img src="@/assets/images/footer/facebook.png" alt="facebook" />
          <img src="@/assets/images/footer/tg.png" alt="tg" />
          <img src="@/assets/images/footer/inst.png" alt="tg" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: white;
  padding: 50px 0;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-title {
      font-family: var(--MB700);
      font-size: 40px;
      text-align: center;
      background: linear-gradient(90deg, #1b263b 11.36%, #415a77 84.77%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #0b2349;
      display: table;

      @media (max-width: 992px) {
        font-size: 35px;
      }

      @media (max-width: 992px) {
        font-size: 30px;
      }
    }

    &-contacts {
      margin-top: 20px;
      display: flex;
      align-items: center;

      @media (max-width: 576px) {
        flex-direction: column;
      }

      & img {
        width: 35px;

        &:first-of-type {
          margin-left: 20px;
        }

        &:not(:last-child) {
          margin-right: 10px;
        }

        &:last-child {
          width: 32px;
        }
      }
    }

    &-social {
        @media (max-width: 576px) {
            margin-top: 20px;
        }
    }

    &-number {
      background: linear-gradient(90deg, #1b263b 11.36%, #415a77 84.77%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: #0b2349;
      display: table;
      font-family: var(--MB700);
      font-size: 30px;

      @media (max-width: 992px) {
        font-size: 25px;
      }
    }
  }
}
</style>