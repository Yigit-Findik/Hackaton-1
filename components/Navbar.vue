<template>
  <nav class="bg-gray-800 bg-opacity-50 py-4 px-10">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div>
          <nuxt-link to="/" class="text-white text-2xl font-bold"
            >Gym Website</nuxt-link
          >
        </div>
        <div class="space-x-4 links">
          <nuxt-link to="/" class="text-white">Home</nuxt-link>
          <nuxt-link to="/vindeenclub" class="text-white"
            >Vind een club</nuxt-link
          >
          <nuxt-link to="/begeleiding" class="text-white"
            >Begeleiding</nuxt-link
          >
          <nuxt-link to="/prijzen" class="text-white">Prijzen</nuxt-link>
          <nuxt-link to="/overons" class="text-white">Over ons</nuxt-link>
          <nuxt-link to="/login" class="text-white">Login</nuxt-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
.links .nuxt-link-exact-active {
  font-weight: bold;
  color: #ed8b19;
}
</style>
