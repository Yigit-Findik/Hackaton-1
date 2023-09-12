<template>
    <nav class="bg-gray-800 py-4 px-10">
      <div class="container mx-auto">
        <div class="flex justify-between items-center">
          <div>
            <nuxt-link to="/" class="text-white text-2xl font-bold">Gym Website</nuxt-link>
          </div>
          <div class="space-x-4">
            <nuxt-link to="/" class="text-white">Home</nuxt-link>
            <nuxt-link to="/vindeenclub" class="text-white">Vind een club</nuxt-link>
            <nuxt-link to="/page2" class="text-white">Page 2</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  </style>
  