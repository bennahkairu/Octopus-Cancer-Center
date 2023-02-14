<template>
  <header class="absolute w-full z-50">
    <div class="container flex items-center text-white">
      <div class="w-3/12">
        <img :src="getSrc('octopus.svg')" class="w-32">
      </div>

      <ul class="flex flex-1 gap-x-4 justify-center">
        <li class="py-8 flex" v-for="(nav, i) in navItems" :key="i">
          <a :href="nav.section" class="text-sm font-medium">{{ nav.label }}</a>
        </li>
      </ul>

      <div class="w-3/12 flex items-center justify-end">
        <a href="tel:+13050000000" class="border border-gray-300 rounded-full py-3 px-8 text-sm font-medium">+1 305-000-0000</a>
      </div>
    </div>
  </header>

  <slot></slot>

  <Contact />
</template>

<script setup>
import { getSrc } from '@/assets/scripts'
import Contact from '@/components/Contact.vue'

const navItems = [
  { label: "About Us", section: "#about-us" },
  { label: "Specialists", section: "#specialists" },
  { label: "Services", section: "#services" },
  { label: "Book Appointment", section: "#appointment" },
  { label: "Faqs", section: "#faqs" },
  { label: "Contact", section: "#contact" },
]
</script>
