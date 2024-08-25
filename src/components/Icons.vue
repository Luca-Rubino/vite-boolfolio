<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import IconCommunity from './icons/IconCommunity.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import IconSupport from './icons/IconSupport.vue'
import IconTooling from './icons/IconTooling.vue'
</script>

<template>
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
</template>

<style lang="scss" scoped>
@import "./../assets/app.scss";

section {
    display: flex;
    justify-content: space-between;

    div {
        background-color: $Primary-color;
        color: $Secondary-color;
        padding: .6rem .6rem;
        margin-top: .7rem;
        display: flex;
        border: 3px solid $My-tx-purple;
        border-radius: 35px;
        cursor: context-menu;
    }
}
</style>