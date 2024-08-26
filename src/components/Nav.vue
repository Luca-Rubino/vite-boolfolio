<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
    props: {
        type: String,
        required: true
    }
})
</script>

<script>
    export default{
        data() {
            return {
                navLinkNames: [
                    {
                        label: "Home",
                        name: "home"
                    },
                    {
                        label: "Project",
                        name: "project"
                    },
                    {
                        label: "About",
                        name: "about"
                    },
                ]
            }
        }
    }
</script>

<template>
    <nav class="container">
        <section>
            <h1>
                {{ props }}
            </h1>
        </section>

        <section>
            <a href="/">
                <img src="./../../public/boolean.ico" alt="logo">
            </a>

            <ul>
                <li v-for="navItem in navLinkNames">
                    <RouterLink :to="{ name: navItem.name }">
                        {{ navItem.label }}
                    </RouterLink>
                </li>
            </ul>
        </section>

    </nav>
</template>

<style lang="scss" scoped>
@import "./../assets/app.scss";

nav {
    background-color: white;
    color: black;
    padding: .7rem;

    h1 {
        text-align: center;
        padding-bottom: .3rem;
    }

    img {
        width: 3rem;
    }

    ul {
        list-style: none;

        li {
            padding-left: .8rem;
        }
    }

    h1 {
        font-size: 2rem;
        font-variant: small-caps;
    }

    a {
        color: $My-tx-purple;
        text-decoration: underline;
    }

    section:nth-of-type(2) {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        ul {
            display: flex;
            width: 100%;
            justify-content: space-around;
        }
    }
}
</style>
