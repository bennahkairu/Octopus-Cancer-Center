<template>
  <section class="pb-20 pt-16" id="mission">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%]">Mission & Vision</h6>
        <div class="flex-1 flex items-start justify-between">
          <h3 class="pb-4 text-4xl leading-snug font-semibold w-1/2 mb-2">Promoting a cancer free community.</h3>
          <ul class="flex flex-1 gap-x-2 gap-y-3 flex-wrap text-sm mt-3">
            <li class="border border-gray-400/70 py-1 px-5 rounded-full text-gray-600">#Clinic</li>
            <li class="border border-gray-400/70 py-1 px-5 rounded-full text-gray-600">#Opthalmogy</li>
            <li class="border border-gray-400/70 py-1 px-5 rounded-full text-gray-600">#Surgery</li>
            <li class="border border-gray-400/70 py-1 px-5 rounded-full text-gray-600">#Truthfulness</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="relative bg-primary mt-10">
      <img :src="getSrc('mission.jpg')" class="absolute w-full h-full object-cover top-0 left-0 mix-blend-overlay opacity-80" alt="Our Mission">
      <div class="container py-32 text-white z-1 relative">
        <p class="w-3/4 mx-auto leading-relaxed text-2xl">
          Our vision is to create a cancer free community and inspire generations on the need undergo cancer screening and treatment early. To achieve this purpose, our mission is to provide quality, affordable and client-centered cancer treatment and support care to patients. Octopus Cancer Center treats every client that walks through our doors with respect and offers the best services possible. We also focus on client satisfaction by creating safe environment that allows effective interactions between the client and the doctors. We listen to our clients' needs, answer questions, offer advice, provide feedback and maintain regular follow-ups with the client after the first visits.
        </p>
      </div>
    </div>

    <!-- <ul class="flex mt-12 gap-x-2">
      <li class="flex-1"><img class="w-full object-cover mb-3 h-96" :src="getSrc('hospital-1.jpg')" />
        <div class="px-6">
          <h6 class="text-lg"><span class="num-font">01</span><span
              class="text-gray-400 inline-block px-2">/</span><span class="num-font">Selection of lenses</span></h6>
          <p class="text-gray-400 ml-11">The girl got a 50% discount</p>
        </div>
      </li>
      <li class="flex-1"><img class="w-full object-cover mb-3 h-96" :src="getSrc('hospital-2.jpg')" />
        <div class="px-6">
          <h6 class="text-lg"><span class="num-font">02</span><span
              class="text-gray-400 inline-block px-2">/</span><span class="num-font">Correction</span></h6>
          <p class="text-gray-400 ml-11">First time at our clinic</p>
        </div>
      </li>
      <li class="flex-1"><img class="w-full object-cover mb-3 h-96" :src="getSrc('hospital-3.jpg')" />
        <div class="px-6">
          <h6 class="text-lg"><span class="num-font">03</span><span
              class="text-gray-400 inline-block px-2">/</span><span class="num-font">Equipment</span></h6>
          <p class="text-gray-400 ml-11">Behind the standards of EU</p>
        </div>
      </li>
      <li class="flex-1"><img class="w-full object-cover mb-3 h-96" :src="getSrc('hospital-4.jpg')" />
        <div class="px-6">
          <h6 class="text-lg"><span class="num-font">04</span><span
              class="text-gray-400 inline-block px-2">/</span><span class="num-font">Trying all</span></h6>
          <p class="text-gray-400 ml-11">This was about a bitch</p>
        </div>
      </li>
    </ul> -->

  </section>
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
</script>