<script setup>
const { t } = useI18n()

const courses = [
    { title: t('courses.programming'), img: '@/assets/assets/images/courses/web.png' },
    { title: t('courses.drop'), img: '@/assets/images/courses/drop.png' },
    { title: t('courses.smm'), img: '@/assets/images/courses/smm.png' },
    { title: t('courses.scratch'), img: '@/assets/images/courses/scratch.png' },
    { title: t('courses.design'), img: '@/assets/images/courses/disign.png' },
    { title: t('courses.three'), img: '@/assets/images/courses/3d.png' }
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