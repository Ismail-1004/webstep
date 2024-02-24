<template>
  <form class="form">
    <h2 class="form__title">ЗАПОЛНИТЕ АНКЕТУ</h2>
    <input type="text" class="form__input" placeholder="Имя Фамилия" />
    <input type="text" class="form__input" placeholder="Номер телефона" />
    <select id="" class="form__input">
      <option value="" disabled selected>Выбор курса</option>
      <option value="">Web Programming</option>
    </select>
    <button class="form__btn">Оставить заявку</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  background: linear-gradient(
    264.26deg,
    rgba(27, 38, 59, 0.3) 2.59%,
    rgba(65, 90, 119, 0.3) 102.43%
  );
  box-shadow: 0px 4px 50px 0px #00000040;
  max-width: 520px;
  width: 100%;
  padding: 50px;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 576px) {
    padding: 30px;
  }

  &__title {
    font-size: 30px;
    color: white;
    font-family: var(--MR400);
    text-align: center;
    margin-bottom: 30px;
    width: 100%;

    @media (max-width: 576px) {
      font-size: 20px;
      margin-bottom: 25px;
    }
  }

  &__input {
    background: linear-gradient(
      264.26deg,
      rgba(255, 255, 255, 0.2) 2.59%,
      rgba(65, 90, 119, 0.2) 102.43%
    );
    border: none;
    padding: 15px 30px;
    outline: none;
    color: white;
    font-family: serif;
    font-family: var(--ML300);
    font-size: 20px;
    border-radius: 10px;
    width: 100%;

    @media (max-width: 576px) {
      font-size: 16px;
    }

    &::placeholder {
      color: white;
    }

    & option {
      color: black;
    }

    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  &__btn {
    color: rgba(27, 38, 59, 0.8549019608);
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 10px;
    border: none;

    @media (max-width: 576px) {
        font-size: 18px;
    }
  }
}
</style>