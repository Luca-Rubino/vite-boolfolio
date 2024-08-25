<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import Icons from './Icons.vue'
</script>

<template>
        <article>
                <h3>Title_article</h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi, <a href="/">link</a> ipsa iste porro eius, explicabo cumque, neque doloremque ullam vitae nulla blanditiis amet voluptas nihil? Magnam cum veritatis ipsa. Dolor. Sed quae quibusdam quos tempore aliquam mollitia, at illum, <a href="/">link</a> deleniti consectetur assumenda odio cupiditate minima, iste ipsum recusandae harum magni officia reiciendis alias nulla doloribus aliquid impedit itaque numquam. Corporis. Dignissimos recusandae mollitia voluptates obcaecati, aspernatur <a href="/">link</a> quasi natus sunt minima accusamus! A velit nobis, est eius culpa totam? Vitae dicta porro iste id cupiditate nihil adipisci aliquid explicabo deserunt facere!
                </p>
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