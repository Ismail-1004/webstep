<script setup>
const { t } = useI18n()

const courses = [
    { title: t('courses.programming'), img: 'web' },
    { title: t('courses.drop'), img: 'drop' },
    { title: t('courses.smm'), img: 'smm' },
    { title: t('courses.scratch'), img: 'scratch' },
    { title: t('courses.design'), img: 'disign' },
    { title: t('courses.three'), img: '3d' }
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

        @media (max-width: 992px) {
            grid-template-columns: repeat(6,1fr);
            overflow: scroll;
        }
    }
}
</style>