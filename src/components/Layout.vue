<template>
  <header class="absolute w-full z-50">
    <div class="container flex items-center justify-between">
      <div class="lg:w-3/12 w-auto py-8">
        <img :src="getSrc('octopus.svg')" class="lg:w-32 w-24">
      </div>

      <ul class="nav lg:flex hidden flex-1 gap-x-4 justify-center">
        <li class="flex py-8" v-for="(nav, i) in navItems" :key="i">
          <a :href="nav.section" class="text-sm font-medium text-white/80 hover:text-white">{{ nav.label }}</a>
        </li>
      </ul>

      <div class="lg:w-3/12 w-auto flex items-center justify-end text-white gap-x-6">
        <div class=" flex items-center justify-end text-white">
          <a href="tel:+13050000000" class="lg:border border-gray-300 rounded-full py-3 lg:px-8 text-sm font-medium">+1 305-000-0000</a>
        </div>
        <HamBurger class="lg:hidden" @click="toggleMenu" />
      </div>
    </div>
  </header>

  <ul class="mobile-nav -translate-x-full">
    <img :src="getSrc('pattern.jpg')" class="absolute w-full h-full object-cover top-0 left-0 mix-blend-overlay opacity-40 z-0" alt="Mobile Navigation">

    <img :src="getSrc('octopus.svg')" class="w-32 mb-12">
    <li class="pb-4 z-10 relative" v-for="(nav, i) in navItems" :key="i">
      <a
        :href="nav.section"
        class="lg:text-sm text-base font-medium text-white"
        >{{ nav.label }}</a
      >
    </li>
  </ul>

  <slot></slot>

  <Contact />
</template>

<script setup>
import { onMounted } from 'vue'
import Contact from '@/components/Contact.vue'
import { getSrc, toggleMenu, hideMenuOnClick } from '@/assets/scripts'
import { HamBurger } from "@/components/UIElements/Svgs.vue";

const navItems = [
  { label: "About Us", section: "#about-us" },
  { label: "Specialists", section: "#specialists" },
  { label: "Services", section: "#services" },
  { label: "Book Appointment", section: "#appointment" },
  { label: "Faqs", section: "#faqs" },
  { label: "Contact", section: "#contact" },
]

onMounted(() => {
  hideMenuOnClick()
})
</script>

<style scoped>
ul.mobile-nav {
  @apply lg:hidden fixed lg:left-0 h-screen bg-primary z-50 flex flex-col gap-y-8 py-12 pl-10 md:pr-16 pr-10 md:w-auto w-3/4 transition-all;
}

ul.mobile-nav li:not(:last-of-type) {
  @apply border-b border-white/40
}

.nav > li > a:after {
  @apply border-b block pb-1 w-0 transition-all;
  content: "";
}

.nav li:hover > a:after {
  @apply lg:w-full;
}
</style>