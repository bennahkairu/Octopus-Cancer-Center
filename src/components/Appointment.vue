<template>
  <section class="md:py-24 py-16 bg-primary text-white relative" id="appointment">
    <img :src="getSrc('mission.jpg')" class="absolute w-full h-full object-cover top-0 left-0 mix-blend-overlay opacity-80" alt="Our Mission">
    <div class="container relative z-1">
      <div class="flex">
        <div class="w-[18%] mt-2 lg:block hidden"><img class="w-12" :src="getSrc('octo-fav.svg')" /></div>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3 class="pb-4 lg:text-4xl md:text-3xl md:leading-snug text-2xl leading-[2rem] font-semibold lg:w-1/2 md:w-5/12 w-3/4 mb-2">Make an appointment with us.</h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>
          <div class="md:mt-12 mt-8">
            <h3 class="font-semibold text-lg mb-6">About yourself</h3>
            <div class="flex md:flex-row flex-col flex-wrap gap-x-6 mb-6 gap-y-4">
              <label class="flex-1">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
                  type="text" placeholder="Full name" />
              </label>
              <label class="flex-1">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
                  type="email" placeholder="Email Address" />
              </label>
            </div>

            <div class="flex flex-wrap">
              <label class="md:w-1/2 md:pr-4 w-full">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
                  type="email" placeholder="Phone Number" />
              </label>
            </div>
          </div>
          <div class="md:mt-16 mt-10">
            <h3 class="font-semibold text-lg mb-6">Admission data</h3>
            <div class="flex md:flex-row flex-col flex-wrap gap-x-6 gap-y-4">
              <label class="flex-1">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
                  type="text" placeholder="Date" />
              </label>
              <label class="flex-1">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-10 py-4 rounded-full bg-transparent text-gray-200 w-full"
                  type="email" placeholder="Time" />
              </label>
            </div>
            <button class="rounded-full py-4 px-24 mt-6 bg-white text-primary font-semibold" type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
</script>
