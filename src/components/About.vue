<template>
  <section class="pt-24" id="about-us">
    <div class="container relative z-1">
      <div class="flex justify-between">
        <div class="w-5/12"><img class="w-full object-cover mb-12 h-32" :src="getSrc('octobuilding.jpg')" />
          <div class="flex justify-between">
            <h6 class="font-semibold flex-1 text-base mt-2">About Us</h6>
            <div class="w-7/12">
              <h3 class="pb-4 text-4xl leading-snug font-semibold">Opthalmology clinic Vigen.</h3>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed">The modern Vigen Opthalmology Clinic
                is one of the 5 top level clinics of the European Union.</p>
            </div>
          </div>
          <div class="flex items-end">
            <div class="flex-1">
              <div class="triangle-notch rotate-[-45deg]"></div>
            </div>
            <div class="w-7/12">
              <button class="text-white font-semibold rounded-full py-4 px-10 bg-primary text-sm">Our
                services</button>
            </div>
          </div>
        </div>
        <div class="w-5/12">
          <div class="grid grid-cols-2 gap-y-2">
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">01</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed  max-w-[75%]">We use modern equipment.
              </p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">02</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed max-w-[75%]">The result surpasses all
                expectations</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">03</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed  max-w-[75%]">We have the best
                professionals.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">04</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed max-w-[75%]">We train our own
                specialists inhouse.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">05</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed max-w-[75%]">Individual contracts with
                each client.</p>
            </div>
            <div>
              <h5 class="num-font text-2xl border-b border-slate-200 pb-4 mb-4">06</h5>
              <p class="text-gray-600 mb-12 text-sm leading-relaxed max-w-[75%]">We have European
                certifications.</p>
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