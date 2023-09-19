<template>
    <div>
      <div class="container py-4 px-10 grid grid-cols-2">
        <div class="uppercase">
        <div class="">
        <h1 class="text-7xl font-bold">Vergelijk</h1>
        <h1 class="text-7xl font-bold text-orange">Lidmaatschappen</h1>
      </div>
      <div class=" w-fit whitespace-nowrap">

      </div>
    </div>

    </div>
    <br>
    <div class="flex flex-wrap justify-center container mx-auto gap-20 uppercase ">
        <div class="grid grid-rows-2">

      <div class="p-6 bg-white aspect-square flex items-center justify-center">
        <div class="font-bold text-3xl mb-2">Comfort <br> €9.99</div>
        <div class="font-bold text-xl mb-2 opacity-50">/4 weken</div>
      </div>
      <div class="text-[0.7rem]">*Voor de eerste <b class="text-orange">twee</b> periodes van 4 weken, daarna €24,99/4 weken</div>

        </div>

      <div class="grid grid-rows-2">
          <div class="p-6 bg-orange aspect-square flex items-center justify-center">
              <div class="font-bold text-3xl mb-2">Premium <br> €9.99</div>
              <div class="font-bold text-xl mb-2 opacity-50">/4 weken</div>
            </div>
            <div class="text-[0.7rem]">*Voor de eerste <b class="text-orange">twee</b> periodes van 4 weken, daarna €29,99/4 weken</div>
        </div>

<div class="grid grid-rows-2">
      <div class="p-6 bg-[#42D2F2] aspect-square flex items-center justify-center ">
        <div class="font-bold text-3xl mb-2">all-in <br> €39.99</div>
        <div class="font-bold text-xl mb-2 opacity-50">/4 weken</div>
      </div>
      <div class="text-[0.7rem] ">*Voor de eerste <b class="text-orange">twee</b> periodes van 4 weken, daarna €49,99/4 weken</div>
    </div>
  </div>
    </div>
  </template>
  
  
  <script>
  export default {
    name: 'prijzenpage',
  }
  </script>
  