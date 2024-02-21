<script setup>
const courses = [
    { title: 'Веб Программирование', img: '/_nuxt/assets/images/courses/web.png' },
    { title: 'Дропшиппинг', img: '/_nuxt/assets/images/courses/drop.png' },
    { title: 'Интернет Маркетинг', img: '/_nuxt/assets/images/courses/smm.png' },
    { title: 'Scratch', img: '/_nuxt/assets/images/courses/scratch.png' },
    { title: 'Веб Дизайн', img: '/_nuxt/assets/images/courses/disign.png' },
    { title: '3Ds Max', img: '/_nuxt/assets/images/courses/3d.png' }
]
</script>

<template>
    <section class="courses">
        <div class="courses__content">
            <course-card v-for="course in courses" :key="course.title" :course="course" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
.courses {
    &__content {
        display: grid;
        grid-template-columns: repeat(3,1fr);
    }
}
</style>