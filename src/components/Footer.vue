<script setup>

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
footer {
    background-color: var(--my-bg-black);
    color: var(--my-tx-white);
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
                color: var(--my-tx-white);
            }
        }
    }
}
</style>