<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import Card from './Card.vue'

defineProps({
    props: {
        type: String,
        required: true
    }
})
</script>

<template>
    <main>
        <section>
            <h2>{{ props }}</h2>
            <p>lorem*300</p>
            <!-- <card/>   -->
        </section>
    </main>
</template>

<style lang="scss" scoped>
    h2 {
        text-align: center;
        text-transform: capitalize;
        padding: .8rem;
    }
</style>