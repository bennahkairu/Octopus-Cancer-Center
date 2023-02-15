<template>
  <section class="md:pt-48 pt-32 min-h-[900px] relative bg-black text-white"><img
      class="absolute w-full h-full top-0 left-0 object-cover opacity-60" :src="getSrc('care-banner.jpg')" />
    <div class="container relative z-1">
      <div class="lg:flex ld:mb-36 mb-20">
        <div class="md:w-7/12">
          <h1 class="lg:text-[2.5rem] lg:leading-tight md:text-3xl md:leading-snug leading-relaxed text-2xl font-medium">An unrivaled commitment to providing quality, patient oriented, affordable cancer treatment and care.</h1>
        </div>
        <div class="flex-1 lg:text-right lg:mt-0 mt-8">
          <h2 class="text-6xl mb-2 font-black">3K+</h2>
          <p class="text-white/70">Patients treated &amp;</p>in remission.
        </div>
      </div>

      <div class="md:flex justify-between">
        <div class="lg:w-5/12 md:w-7/12">
          <div class="flex">
            <h6 class="font-medium flex-1 text-base">Facts</h6>
            <p class="border-b pb-6 mb-6 border-slate-200/50 w-7/12">Octopus Cancer Center has adopted values of integrity, professionalism, honesty, and effective communication</p>
          </div>
          <div class="flex items-end">
            <div class="flex-1">
              <div class="triangle-notch rotate-[-45deg]"></div>
            </div>
            <p class="w-7/12">We house the most competent specialists in the field, with your utmost care at heart.</p>
          </div>
        </div>

        <div class="md:w-5/12 md:pl-12 md:mt-0 mt-12">
          <div class="bg-primary py-6 px-8">
            <div class="flex justify-between lg:mb-16 mb-10">
              <h6 class="font-medium w-9/12">Take this coupon as a discount for the fist visit on us.</h6>
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
            <div class="lg:flex md:block flex justify-between items-center">
              <h4 class="text-4xl num-font lg:mb-0 md:mb-6">20%</h4>
              <button class="text-gray-800 font-semibold rounded-full py-2 px-5 bg-white text-sm">Book an
                appointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
</script>
