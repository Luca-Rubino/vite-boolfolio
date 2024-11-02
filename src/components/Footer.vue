<template>
  <footer>
    <section>
      <ul>
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

      <ul>
        <li>
          <img src="/src/assets/img/favicon.svg" alt="Image-logo">
        </li>
        <li>
          <h3>SottoTitolo</h3>
        </li>
        <li>
          <a href="/">link</a>
        </li>

      </ul>

      <ul>
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
    </section>

    <section>
      <p>&copy;Copyright</p>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: aqua;

  section:first-of-type {
    display: flex;
    justify-content: space-between;
    padding: 0 .7rem;

    ul {
      list-style: none;

      li {
        img {
          width: 150px;
          padding: .3rem;
        }
      }
    }
  }

  section:last-of-type {
    p {
      margin: 0;
      padding: .2rem .5rem;
    }
  }
}
</style>
