<script setup>
const title = ref('')

const courses = [
    { img: '/_nuxt/assets/images/programming.png', title: 'Веб программирование' },
    { img: '/_nuxt/assets/images/drop.png', title: 'Дропшиппинг' },
    { img: '/_nuxt/assets/images/marketing.png', title: 'Интернет Маркетинг' },
]

const courseTitle = ref('')
const courseCardTitle = ref('')

const changeTitle = t => title.value = t

</script>

<template>
    <section class="content">
        <img src="@/assets/images/bg.png" alt="" class="content__bg">
        <div class="content__main container">
            <headerComponent />
            <div class="content__main-content">
                <div class="content__main-info">
                    <div class="content__main-courseInfo">
                        <h2 class="content__main-title"> {{ title }} </h2>
                    </div>
                </div>
                <div class="content__main-courses">
                   <course-card :courses="courses" :title="courseCardTitle" @changeTitle="changeTitle" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.content {
    height: 100vh;
    width: 100%;
    position: relative;

    background: #00000098;

    &__bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        object-fit: cover;
        z-index: -1;
    }

    &__main {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-title {
            color: white;
            text-transform: uppercase;
        }

        &-content {
            display: flex;
            justify-content: space-between;
            align-items: center;  
        }

        &-courses {
            display: flex;
            flex-direction: column;
            row-gap: 20px;
            padding-bottom: 20px;
        }
    }

}
</style>
