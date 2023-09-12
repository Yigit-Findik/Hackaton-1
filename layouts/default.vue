<template>
    <div>
      <Navbar /> <!-- Include the Navbar.vue component -->
      <nuxt />
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
  