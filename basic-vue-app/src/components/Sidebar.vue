<template>
  <div class="sidebar">
    <router-link to="/authors" class="authors">
      <img class="author-img" src="https://blog.udemy.com/wp-content/uploads/2013/10/howtostartwritingabook-300x201.jpg" alt="author">
      <h2>Authors</h2>
    </router-link>
    <router-link to="/books" class="books">
      <img class="book-img" src="https://d1nz104zbf64va.cloudfront.net/dt/a/o/top-7-books-that-changed-the-world.jpg" alt="book">
      <h2>Books</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>

  .books {
    border: 1px solid black;
    height: 25vw;
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;
  }

  .book-img {
    border: 1px solid black;
    height: 5vw;
    width: 5vw;
  }

  .authors {
    border: 1px solid black;
    height: 25vw;
    width: 10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    color: black;

  }

  .author-img {
    border: 1px solid black;
    height: 5vw;
    width: 5vw;
  }

  h2 {
    writing-mode:vertical-lr;
    text-orientation: upright;
  }

</style>
