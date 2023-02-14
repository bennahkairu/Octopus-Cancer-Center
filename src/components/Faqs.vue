<template>
  <section class="pt-24 pb-20" id="faqs">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%]">FAQ</h6>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3 class="pb-4 text-4xl leading-snug font-semibold w-5/12 mb-2">Questions from our clients.</h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul>
            <li class="py-7 flex border-b cursor-pointer" v-for="(faq, i) in faqs" :index="i">
              <div class="flex justify-between w-full items-center">
                <h5 class="text-base font-medium">{{ faq.question }}</h5>
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
const faqs = [
  {
    question: "Is it possible to pay for clinic services at the expense of the organization?"
  },
  {
    question: "Where can I find information about the licences of the clinic"
  },
  {
    question: "Are there any discounts available?"
  },
  {
    question: "Does Octopus Medical center provide treatment on credit?"
  },
]
</script>