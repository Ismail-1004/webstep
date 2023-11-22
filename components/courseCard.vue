<script setup>
defineProps({
    courses: {
        type: Array,
        required: true,
        default: []
    },
    title: {
        type: String,
        required: true,
        default: false
    }
})

const emit = defineEmits(['changeTitle'])
const span = ref('')

onMounted(() => {
    Array.from(span.value).forEach(s => s.addEventListener('mouseover', (e) => {
        span.value = e.target.innerHTML
        emit('changeTitle', span.value)
    }))
})

</script>

<template>
    <div class="course" v-for="course in courses" :key="course.id">
        <span class="course__title" ref="span"> {{ course.title }} </span>
        <img :src="course.img" alt="">
    </div>
</template>

<style lang="scss" scoped>
.course {
    overflow: hidden;
    border-radius: 10px;

    position: relative;
    transition: .3s;
    
    max-width: 350px;

    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        z-index: -1;
    }

    &:hover {
        transform: scale(1.1);
    }

    &__title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        color: white;
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 18px;
        font-weight: 700;

        text-transform: uppercase;
    }
}
</style>