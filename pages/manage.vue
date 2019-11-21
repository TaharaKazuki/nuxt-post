<template>
  <div>
    <navbar />
    <div class="manage-page">
      
    </div>
  </div>
</template>
<script>
import Navbar from '~/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>
  .manage-page {
    padding: 30px;
  }
  .card {
    margin-bottom: 10px;
  } 
  .card:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
</style>