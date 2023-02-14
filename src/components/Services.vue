<template>
  <section id="services" class="pt-14 pb-20">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%]">Services</h6>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3 class="pb-4 text-4xl leading-snug font-semibold w-1/2 mb-2">
              Excellent services of our clinic.
            </h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul>
            <li class="py-7 flex border-b cursor-pointer" v-for="(service, i) in services" :index="i">
              <div class="flex justify-between w-full items-center">
                <h5 class="text-base font-medium">{{ service.label }}</h5>
                <div class="border border-gray-500/70 p-2 rounded-full">
                  <img :src="getSrc('plus.svg')" alt="Expand" class="w-4 h-4 opacity-50">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>              
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
const services = [
  {
    label: "Diagnostic examination with consultation of an opthalmologist",
  },
  { label: "Children's Opthalmology" },
  { label: "Consultation with a specialized physician" },
  { label: "Consultation with a medical specialist" },
  { label: "Laser treatments for sleeping sickness and glaucoma" },
  { label: "Laser vision correction" },
  {
    label:
      "Treatment of cataract (phacoemulsification with IOL implantation)",
  },
  { label: "Surgical treatment of glaucoma" },
  { label: "Surgical treatment of high levels of refractive anomalies" },
  { label: "Treatment for keratoconus" },
  { label: "Outpatient course of conservative treatment" },
  { label: "Hardware treatment (myopia, hyperopia, strabismus amblyopia)" },
  { label: "Optics" },
]
</script>