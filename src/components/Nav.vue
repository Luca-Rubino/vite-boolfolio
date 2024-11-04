<script setup>
import Logo from './icons/Favicon.vue';
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <section class="container-fluid">
      <article class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/">
              <Logo alt='logo-site' />
            </a></li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              pagine
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">chi sono</a></li>
              <li><a class="dropdown-item" href="/">portfolio</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="/">curriculumVitee</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
          </li>
        </ul>

        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Ricerca" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">cerca</button>
        </form>
      </article>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  padding: .8rem .5rem;

  section {
    article {
      ul {
        align-items: center;

        li {
          a {
            text-transform: capitalize;

            svg {
              width: 6vw;
              padding: .3rem;
              filter: invert(.8);
            }
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
}
</style>
