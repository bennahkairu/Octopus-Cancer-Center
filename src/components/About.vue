<template>
  <section class="md:pt-24 pt-12" id="about-us">
    <div class="container relative z-1">
      <div class="md:flex justify-between">
        <div class="md:w-5/12"><img class="w-full object-cover mb-12 h-32" :src="getSrc('octobuilding.jpg')" />
          <div class="flex justify-between">
            <h6 class="font-semibold flex-1 lg:block hidden text-base mt-2">About Us</h6>
            <div class="lg:w-7/12">
              <h3 class="pb-4 md:text-3xl text-2xl leading-snug font-semibold">Octopus Cancer Center</h3>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed">A new start up healthcare organization in South Florida, Miami specializing in treatment, support care, and research of cancer.</p>
            </div>
          </div>
          <div class="flex items-end">
            <div class="flex-1">
              <div class="triangle-notch rotate-[-45deg]"></div>
            </div>
            <div class="lg:w-7/12 w-auto">
              <a href="#services" class="text-white font-semibold rounded-full py-4 px-10 bg-primary text-sm">Our
                services</a>
            </div>
          </div>
        </div>
        <div class="md:w-5/12 md:mt-0 mt-24">
          <div class="grid grid-cols-2 gap-y-2">
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">01</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer breast cancer screening.
              </p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">02</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer skin lung cancer screening.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">03</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer skin stomach cancer screening.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">04</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer skin pancreatic cancer screening.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">05</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer skin lyphoma screening.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">06</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed md:max-w-[75%] max-w-[90%]">We offer skin colon cancer screening.</p>
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