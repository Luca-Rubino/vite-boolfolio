<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Icons from './Icons.vue'
    import ProjectsCard from './ProjectsCard.vue';
</script>

<template>
        <article>
                <ProjectsCard/>
                <Icons/>
        </article>
</template>

<style lang="scss" scoped>
@import "./../assets/app.scss";

article {
    background-color: $My-bg-gold;
    color: $Primary-color;
    text-shadow: 0px 0px .7px $My-bg-black;
    border: 1px solid $My-tx-purple;
    border-radius: 15px;
    margin-bottom: 33.5rem;
    margin-left: .3rem;
    width: 25vw;
    padding: 25px;
    cursor: grab;

    h2 {
        text-align: center;
        text-transform: capitalize;
    }

    p {
        padding: .5rem;

        a {
            color: $My-tx-purple;
        }
    }

    h3::selection,
    p::selection,
    a::selection {
        background-color: $My-bg-gold;
    }
    
}

article:active {
    cursor: grabbing;
}
</style>