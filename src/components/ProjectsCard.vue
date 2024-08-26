<script>
import axios from 'axios';
export default{
    data() {
        return{
            projects: [],
        }
    },
    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/laravel', {
                params: {
                    currentPage: 1,
                    totalPages: 1
                }
            })
                .then((response) => {
                    console.log(response.data.results.data);
                    this.projects.push(...response.data.results.data);
                    this.currentPage = page;
                    console.log(response.data.results);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        }
    },
    created(){
        this.getProject();
    }
}
</script>

<template>
    <div class="container">
        <h2>ProjectsCard</h2>
        <ul>
                <li class="" v-for="project in projects">
                    {{ project.nome }}
                </li>
            </ul>

    </div>
</template>

<style lang="scss">

</style>