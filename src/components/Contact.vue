<template>
  <section class="lg:py-24 py-16 bg-primary text-white relative" id="contact">
    <img :src="getSrc('mission.jpg')" class="absolute w-full h-full object-cover top-0 left-0 mix-blend-overlay opacity-80" alt="Our Mission">
    <div class="container relative z-1">
      <div class="flex mb-12">
        <div class="flex-1 mt-2"><img class="w-[10rem]" :src="getSrc('octopus.svg')" /></div>
        <div class="flex-1 flex justify-end"><span></span></div>
      </div>
      <h3 class="pb-4 text-2xl leading-snug font-semibold md:w-1/2 mb-2">Request a callback.</h3>
      <div class="lg:mt-12 mt-6 lg:pb-20 pb-12 border-b border-white/20 mb-4">
        <div class="flex md:flex-row flex-col gap-x-4 gap-y-6 mb-6">
          <label class="md:w-1/2">
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
              type="text" placeholder="Full name" />
          </label>
          <label class="flex-1">
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
              type="email" placeholder="Phone Number" />
          </label>
        </div>
        <div class="flex gap-y-6 gap-x-4">
          <label class="md:w-1/2 w-full">
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
              type="email" placeholder="Medical issue / issue of concern" />
          </label>
        </div>
        <button class="rounded-full py-4 px-24 mt-6 bg-white text-primary font-semibold md:w-auto w-full" type="submit">Submit</button>
      </div>
      <div class="flex md:flex-row flex-col gap-y-3 justify-between md:items-center">
        <p class="text-white/80 text-sm">&copy; Octopus Cancer Center. All rights reserved.</p>
        <ul class="flex items-center text-sm text-white/80 gap-x-6">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
</script>
