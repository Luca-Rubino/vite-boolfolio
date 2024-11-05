<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Logo from './icons/Favicon.vue';
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <section class="container-fluid">
      <article class="collapse navbar-collapse" id="navbarSupportedContent">
        <a href="/"><Logo class="my-logo-nav" alt='logo-site'/></a>

        <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0">
          <li>
            <a class="nav-link fw-bold" href="/Chi_Sono">chi sono</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/Portfolio">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="/CurriculumVitee">curriculumVitee</a>
          </li>
        </ul>

        <form class="d-flex" role="search">
          <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0 pe-5">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                pagine
              </a>

              <ul class="dropdown-menu mt-3 me-5">
                <li><a class="dropdown-item" href="/Chi_Sono">chi sono</a></li>

                <li><a class="dropdown-item" href="/Portfolio">portfolio</a></li>

                <li>
                  <hr class="dropdown-divider">
                </li>

                <li><a class="dropdown-item" href="/CurriculumVitee">curriculumVitee</a></li>
              </ul>
            </li>

          </ul>

          <input class="form-control me-2 border-secondary" type="search" placeholder="Ricerca" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">cerca</button>
        </form>
      </article>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  font-size: 1.2vw;
  section {
    padding: 0 4rem 0 1.8rem;

    article {
      ul {
        align-items: center;
      }

      li {
        padding-left: .5rem;

        a {
          text-transform: capitalize;
        }
      }
    }

    form {
      button {
        text-transform: capitalize;
      }
    }
  }
}

// class
.my-logo-nav {
  width: 135px;
  padding: .2rem;
  fill: chocolate;
}

</style>
