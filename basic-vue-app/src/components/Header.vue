<template>
  <div class="header">
    <img class="logo" src="https://previews.123rf.com/images/benchart/benchart1204/benchart120400018/13237662-illustration-of-a-cartoon-opened-brown-book.jpg" alt="logo">
    <router-link to='/' class="title"><h1>Galvanize Reads</h1></router-link>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style>
  .header {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 3vw;
    width: auto;
    padding-right: 10px;
  }

  .title {
    text-decoration: none;
    color: black;
  }
</style>


