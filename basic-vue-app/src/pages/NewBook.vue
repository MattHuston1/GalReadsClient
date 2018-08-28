<template>
  <div>
    <Sidebar />
    <form>
      <label for="">Title</label>
      <input type="text">
      <label for="">Genre</label>
      <input type="text">
      <label for="">Cover Image URL</label>
      <input type="text">
      <label for="">Description</label>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <label for="">Authors</label>
      <input type="text">
      <button>Add Author</button>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "NewBook",
  components: {
    Sidebar
  }
}
</script>

<style>

</style>