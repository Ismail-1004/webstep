<template>
    <header class="header">
        <nav class="header__nav">
            <NuxtLink to="/">
                <img src="@/assets/images/logo.png" alt="" class="header__nav-img">
            </NuxtLink>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link">КОВОРКИНГ</NuxtLink>
                </li>
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link">КОНТАКТЫ</NuxtLink>
                </li>
                <li class="header__nav-item">
                    <NuxtLink to="/" class="header__nav-link">ПОЗВОНИТЬ</NuxtLink>
                </li>
            </ul>
            <div></div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.header {
    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &-img {
            width: 150px;
            height: 70px;
            object-fit: cover;
        }

        &-list {
            display: flex;
            gap: 30px;
        }

        &-link {
            color: white;
        }
    }
}
</style>


