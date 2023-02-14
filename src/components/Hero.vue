<template>
  <section class="pt-48 min-h-[900px] relative bg-black text-white"><img
      class="absolute w-full h-full top-0 left-0 object-cover opacity-60" :src="getSrc('care-banner.jpg')" />
    <div class="container relative z-1">
      <div class="flex mb-36">
        <div class="w-7/12">
          <h1 class="text-[2.5rem] font-medium leading-tight">Over a long period of time, we've provided hundreds of thousands of eye care services.</h1>
        </div>
        <div class="flex-1 text-right">
          <h2 class="text-6xl mb-2 font-black">50K+</h2>
          <p class="text-slate-300">Patients treated &amp;</p>in remission.
        </div>
      </div>
      <div class="flex justify-between">
        <div class="w-5/12">
          <div class="flex">
            <h6 class="font-medium flex-1 text-base">Facts</h6>
            <p class="border-b pb-6 mb-6 border-slate-200/50 w-7/12">Premium equipment that meets the state-of-the-art
              requirements in the opthalmology discipline.</p>
          </div>
          <div class="flex items-end">
            <div class="flex-1">
              <div class="triangle-notch rotate-[-45deg]"></div>
            </div>
            <p class="w-7/12">Trained professionals providing the utmost care possible.</p>
          </div>
        </div>
        <div class="w-5/12 pl-12">
          <div class="bg-primary py-6 px-8">
            <div class="flex justify-between mb-16">
              <h6 class="font-medium w-9/12">Take this coupon as a discount for the fist visit on us.</h6>
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
            <div class="flex justify-between">
              <h4 class="text-4xl num-font">20%</h4>
              <button class="text-gray-800 font-semibold rounded-full py-2 px-4 bg-white text-sm">Make an
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
