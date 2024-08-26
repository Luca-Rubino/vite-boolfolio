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

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        h1 {
        text-align: center;
        padding-bottom: .3rem;
        }

        img {
            width: 3rem;
        }

        ul {
            list-style: none;
            display: flex;
            width: 100%;
            justify-content: space-around;

            li {
                padding-left: .8rem;

                a {
                    text-decoration: none;
                    font-family: fantasy;
                    font-size: 1rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: $My-bg-black;
                }
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
    }
}
</style>
