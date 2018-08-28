<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      authors: [],
      books: []
    }
  },
  methods: {
    populateData() {
      fetch('https://gal-books.herokuapp.com/authors')
        .then(response => response.json())
        .then(response => {
          this.authors = response.authors
        })
        console.log('Authors', this.authors)
      fetch('https://gal-books.herokuapp.com/books')
        .then(response => response.json())
        .then(response => {
          this.books = response.books
        })
        console.log('Books', this.books)
    }
  },
  mounted() {
    this.populateData()
  }
}
</script>

<style>

</style>
