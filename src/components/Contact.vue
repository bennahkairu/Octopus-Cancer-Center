<template>
  <section class="py-24 bg-primary text-white" id="about-us">
    <div class="container relative z-1">
      <div class="flex mb-12">
        <div class="flex-1 mt-2"><img class="w-[10rem]" :src="getSrc('octopus.svg')" /></div>
        <div class="flex-1 flex justify-end"><span></span></div>
      </div>
      <h3 class="pb-4 text-2xl leading-snug font-semibold w-1/2 mb-2">Request a callback.</h3>
      <div class="mt-12 pb-20 border-b border-white/20 mb-4">
        <div class="flex flex-wrap gap-y-6">
          <label class="w-1/2">
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
              type="text" placeholder="Full name" />
          </label>
          <label class="w-1/2">
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
              type="email" placeholder="Phone Number" />
          </label>
          <label>
            <input
              class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
              type="email" placeholder="Medical issue / issue of concern" />
          </label>
          <button class="rounded-full py-1 px-12 bg-white text-primary font-semibold" type="submit">Submit</button>
        </div>
      </div>
      <div class="flex justify-between items-center">
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
