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
        <ul>
          <li>
            <Logo alt="Image-logo" />
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
      <p>&copy;Copyright</p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
@import "../assets/variables.scss";

footer {
  background-color: black;
  color: white;
  padding: 1rem .5rem .3rem;

  section {
    display: flex;

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
        margin: 0;
        padding: 2rem 0 0;

        li {
          padding: 0 .3rem;
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
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
          display: flex;

          svg {
            padding: .2rem;
            width: 250px;
            fill: chocolate;
          }

          p {
            padding: .3rem;
          }
        }
      }
    }

    article:nth-child(3) {
      ul {
        padding-left: 333px;
      }
    }
  }
}
</style>
