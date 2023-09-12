<template class="">
    <div class="">
      <Navbar /> <!-- Include the Navbar.vue component -->
      <nuxt class="" />
    </div>
  </template>
  
  <script>
  import Navbar from '~/components/Navbar.vue'; // Import the Navbar component
  
  export default {
    name: 'DefaultLayout',
    components: {
      Navbar, // Register the Navbar component
    },
  };
  </script>
  