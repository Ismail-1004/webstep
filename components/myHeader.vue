<template>
    <header class="header">
        <nav class="header__nav container">
            <NuxtLink to="/">
                <img src="@/assets/images/header/logo.png" class="header__nav-logo" alt="logo">
            </NuxtLink>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link"> Курсы </NuxtLink>
                </li>
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link"> Коворкинг </NuxtLink>
                </li>
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link"> Контакты </NuxtLink>
                </li>
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link"> Локация </NuxtLink>
                </li>
            </ul>
            <div class="header__nav-locales">
                <img src="@/assets/images/header/ru.png" alt="ru-flag">
            </div>
        </nav>
        <div class="header__content container">
            <div class="header__content-content">
                <div class="header__content-titles">
                    <h1 class="header__content-title"> Курсы Современных Профессий </h1>
                    <button class="header__content-btn"> Начать обучение </button>
                </div>
                <div class="header__content-image">
                    <img src="@/assets/images/header/header-content.png" alt="web">
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 15px;

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
            }
        }
    }
    &__content {
        flex-grow: 1;
        display: flex;
        align-items: flex-end;

        @media (max-width: 576px) {
            align-items: center;
        }

        &-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            background: linear-gradient(264.26deg, rgba(27, 38, 59, 0.3) 2.59%, rgba(65, 90, 119, 0.3) 102.43%);
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
            }

            @media (max-width: 768px) {
                font-size: 40px;
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
            color: #1B263B;
            margin-top: 60px;
            padding: 10px 20px;
            border-radius: 10px;
            border: none;
            cursor: pointer;
            
            @media (max-width: 768px) {
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
                transition: .3s;

                @media (max-width: 1200px) {
                    width: 400px;
                }

                 @media (max-width: 576px) {
                    width: 300px;
                }
            }
        }
    }
}
</style>