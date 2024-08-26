<script>
import axios from 'axios';

export default {
    data() {
        return {
            projects: [],
            currentPage: 1,
            totalPages: 1
        }
    },
    methods: {
        getProject(page = 1) {
            axios.get('http://127.0.0.1:8000/api/project/', {
                params: {
                    page: page
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects.push(...response.data.results.data);
                    console.log(this.currentPage, page);
                    this.currentPage = page;
                })
                .catch((error) => {
                    this.$router.push({ name: "404" });
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        },
    },
    created() {
        this.getProject();
        console.log(this.projects.id)
    }
}
</script>

<template>
    <section class="container">
        <article class="singleCard" v-for="project in projects" :key="project">
            <p>
                {{ project.id }}
            </p>
            <p>
                <RouterLink class="lenteSearch" :to="{name: 'project', params: project.id}">
                    {{ project.nome }}
                </RouterLink>
            </p>
            <p>
                <a :href="project.url_repo">{{ project.url_repo }}</a>
            </p>
        </article>

        <div>
            <button @click.prevent="getProject(currentPage +1)" class="custom-btn btn-2">Carica altro</button>
        </div>
    </section>
</template>

<style lang="scss"></style>