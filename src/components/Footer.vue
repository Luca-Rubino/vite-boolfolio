<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// ...

defineProps({
    props: {
        type: String,
        required: true
    }
})
</script>

<template>
    <footer>
        <h2>{{ props }}</h2>
        <section>
            <article>
                <ul>
                    <h3>Page_list</h3>
                    <li>
                        <a href="/">link</a>
                    </li>
                </ul>
            </article>
        </section>

        <section>
            <p>&copy;Copyright</p>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@import "./../assets/app.scss";

footer {
    background-color: $My-bg-black;
    color: $My-tx-white;
    padding: 1rem;

    h2 {
        text-align: center;
        text-transform: capitalize;
    }

    ul {
        list-style: none;

        li {
            padding: .2rem;

            a {
                color: $My-tx-white;
            }
        }
    }
}
</style>