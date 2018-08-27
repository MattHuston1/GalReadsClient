<template>
  <div class="container">
    <router-link to="/authors" class="book-container">
      <img class="book" src="https://blog.udemy.com/wp-content/uploads/2013/10/howtostartwritingabook-300x201.jpg" alt="authors">
      <h2 class="homepage-h2">Authors</h2>
    </router-link>
    <router-link to="/books" class="author-container">
      <img class="author" src="https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg" alt="books">
      <h2 class="homepage-h2">Books</h2>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Homepage"
}
</script>

<style>
  .container {
    display: flex;
  }

  .book-container {
    border: 1px solid black;
    height: 50vw;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .book {
    border: 1px solid black;
    height: 40vw;
    width: 40vw;
  }

  .author-container {
    border: 1px solid black;
    height: 50vw;
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .author {
    border: 1px solid black;
    height: 40vw;
    width: 40vw;
  }

  h2 {
    text-decoration: none;
  }

</style>

