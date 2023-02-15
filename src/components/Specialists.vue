<template>
  <section class="pt-14 md:pb-20 pb-14" id="specialists">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%] lg:block hidden">Specialists</h6>
        <div class="flex-1">
          <div class="flex items-start justify-between lg:mb-12 mb-4">
            <div class="md:w-1/2 w-3/4 mb-2">
              <h3 class="pb-4 lg:text-4xl md:text-3xl md:leading-snug text-2xl leading-[2rem] font-semibold">Surgeons and Oncologists</h3>
              <p class="text-gray-600 mb-8 text-sm leading-relaxed">Our clinic employs only professional
                physicians. We select the best doctors on a regular basis.</p>
            </div>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul class="grid md:grid-cols-3 grid-cols-2 gap-x-3 gap-y-12">
            <li class="cursor-pointer" v-for="(doctor, i) in doctors" :key="i">
              <img :src="getSrc(doctor.img)" alt="doctor.name">
              <h6 class="text-base font-semibold w-2/3 mt-3">{{ doctor.name }}</h6>
              <span class="text-gray-500 text-sm">{{ doctor.position }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
const doctors = [
  {
    img: "Adan.jpg",
    name: "Adán Séaghdha",
    position: "Head of surgery",
  },
  {
    img: "Laurel.jpg",
    name: "Laurel Neculai",
    position: "Oncologist",
  },
  {
    img: "Aurelia.jpg",
    name: "Aurelia Thei",
    position: "Oncologist",
  },
  {
    img: "Awinita.jpg",
    name: "Awinita Félicienne",
    position: "Oncologist",
  },
  {
    img: "Italo.jpg",
    name: "Italo Pravin",
    position: "Oncologist",
  },
  {
    img: "Fen.jpg",
    name: "Fen Appius",
    position: "Oncologist",
  },
]
</script>