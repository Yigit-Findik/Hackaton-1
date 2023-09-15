<template>
  <div>
    <!-- Rest of your index page content -->
    <div class="container py-4 px-10 grid grid-cols-2">
      <div class="uppercase">
        <div class="">
          <h1 class="text-7xl font-bold text-orange">Sport tijdelijk</h1>
        </div>
        <div class="w-fit whitespace-nowrap">
          <h1 class="text-7xl font-bold">voor maar € 9,99</h1>
          <h2 class="text-lg font-bold flex flex-item-end">/4 weken</h2>
        </div>
        <div class="py-10">
          <nuxt-link
            to="/register"
            class="text-white bg-[#42D2F2] hover:bg-[#42bdf2] duration-300 p-3 rounded-lg"
            >Word lid!</nuxt-link
          >
        </div>
      </div>
      <div class="text-white h-fit text-xl">
        <p class="border-2 rounded-xl p-5 text-center border-yellow-400">
          Small but regular workout effort leads you to beauty and
          self-confidence. Set your own routine and conditions of training.
          Choose the program that boosts your results . Take the chance to get
          pround of yourself. Let you body feel the way of perfection
        </p>

        <img
          src="https://pngimg.com/d/fitness_PNG113.png"
          alt="Image Description"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
