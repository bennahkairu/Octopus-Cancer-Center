<template>
  <section class="pt-14 pb-20" id="specialists">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%]">Doctors</h6>
        <div class="flex-1">
          <div class="flex items-start justify-between mb-12">
            <div class="w-1/2 mb-2">
              <h3 class="pb-4 text-4xl leading-snug font-semibold">Surgeons and opthalmologists</h3>
              <p class="text-gray-600 mb-8 text-sm leading-relaxed">Our clinic employs only professional
                physicians. We select the best doctors on a regular basis.</p>
            </div>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul class="grid grid-cols-3 gap-x-3 gap-y-12">
            <li class="cursor-pointer" v-for="(doctor, i) in doctors" :key="i">
              <img :src="getSrc(doctor.img)" alt="doctor.name">
              <h6 class="text-base font-semibold w-2/3">{{ doctor.name }}</h6>
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
    img: "hospital-1.jpg",
    name: "Bondarenko Sergiy Tarasovich",
    position: "Head of department",
  },
  {
    img: "hospital-2.jpg",
    name: "Bondarenko Alla Volodimirivna",
    position: "Oncologist",
  },
  {
    img: "hospital-3.jpg",
    name: "Valery Anatolievich Miroschnichenko",
    position: "Oncologist",
  },
  {
    img: "hospital-4.jpg",
    name: "Shynkarenko Yaroslava Mykolaivna",
    position: "Oncologist",
  },
  {
    img: "hospital-5.jpg",
    name: "Kravchenko Marina Borisivna",
    position: "Oncologist",
  },
  {
    img: "hospital-1.jpg",
    name: "Bondarenko Sergiy Tarasovich",
    position: "Oncologist",
  },
]
</script>