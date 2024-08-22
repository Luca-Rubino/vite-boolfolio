<script setup>
defineProps({
    props: {
        type: String,
        required: true
    }
})

import IconCommunity from './icons/IconCommunity.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import IconSupport from './icons/IconSupport.vue'
import IconTooling from './icons/IconTooling.vue'
</script>

<template>
    <main>
        <h2>{{ props }}</h2>

        <section>
            <article>
                    <h3>Title_article</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi, <a href="/">link</a> ipsa iste porro eius, explicabo cumque, neque doloremque ullam vitae nulla blanditiis amet voluptas nihil? Magnam cum veritatis ipsa. Dolor. Sed quae quibusdam quos tempore aliquam mollitia, at illum, <a href="/">link</a> deleniti consectetur assumenda odio cupiditate minima, iste ipsum recusandae harum magni officia reiciendis alias nulla doloribus aliquid impedit itaque numquam. Corporis. Dignissimos recusandae mollitia voluptates obcaecati, aspernatur <a href="/">link</a> quasi natus sunt minima accusamus! A velit nobis, est eius culpa totam? Vitae dicta porro iste id cupiditate nihil adipisci aliquid explicabo deserunt facere!
                    </p>
            </article>
        </section>

        <section>
            <div>
              <IconCommunity/>  
            </div>
            
            <div>
              <IconDocumentation/>  
            </div>

            <div>
              <IconEcosystem/>  
            </div>

            <div>
              <IconSupport/>  
            </div>

            <div>
              <IconTooling/>  
            </div>            
        </section>
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: var(--my-bg-gold);
    color: var(--my-tx-green);
    padding: 1rem;
    border: 3px solid var(--primary-color);
    border-radius: 15px;
    margin-bottom: 33.5rem;

    h2 {
        text-align: center;
        text-transform: capitalize;
    }

    p {
        padding: .2rem;

        a {
            color: var(--my-tx-purple);
        }
    }
}

section:nth-of-type(2) {
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;

    div {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        padding: 1rem 1rem;
        display: flex;
        border: 3px solid var(--my-tx-purple);
        border-radius: 35px;
    }
}
</style>