<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Logo from './icons/Favicon.vue';
</script>

<template>
  <footer>
    <section>
      <article>
        <ul>
          <li>
            <h3>sottotitolo</h3>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
        </ul>
      </article>

      <article>
        <ul class="d-flex align-items-center">
          <li>
            <Logo class="my-logo-footer" alt="Image-logo" />
          </li>

          <li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut tempora <a href="/">aliquid provident</a>
              recusandae odit earum quia maiores expedita, eligendi ad <a href="/">dolorum odio</a> debitis sequi
              reprehenderit!
            </p>
          </li>
        </ul>
      </article>

      <article>
        <ul>
          <li>
            <h3>sottotitolo</h3>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
          <li>
            <a href="/">link</a>
          </li>
        </ul>
      </article>
    </section>

    <section>
      <p>&copy;Creato da <span>luca rubino</span></p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

footer {
  background-color: black;
  color: white;

  section {
    display: flex;
    padding: 2rem 4rem 0 3.1rem;

    article {
      width: calc(100vw/3);
      ul {
        list-style: none;

        li {
          display: flex;

          p {
            margin: 0;
          }
        }
      }
    }

    article:nth-child(1),
    article:nth-child(3) {
      ul{
        padding: 1.5rem 0 0;

        li {
          padding-left: .8rem;
          text-transform: capitalize;

          a {
            text-decoration: none;
            color: $my-text-prymary-color;
            filter: invert(1);
          }
        }

        li:first-child {
          padding: 0;
        }
      }
    }

    article:nth-child(2) {
      ul {
        li {
          align-items: center;

          p {
            padding: .3rem;
          }
        }
      }
    }

    article:nth-child(3) {
      ul {
        padding-left: 26vw;
      }
    }
  }
}

section:nth-child(2) {
  p {
    span {
      text-transform: capitalize;
      font-style: italic;
    }
  }
}
// class
.my-logo-footer {
    padding: .2rem;
    width: 250px;
    fill: whitesmoke;
  }
</style>
