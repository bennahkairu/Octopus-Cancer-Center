<template>
  <section
    class="lg:pt-24 pt-14 md:pb-20 pb-14 border-t border-gray-100"
    id="faqs"
  >
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%] lg:block hidden">
          FAQ
        </h6>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3
              class="pb-4 lg:text-4xl md:text-3xl md:leading-snug text-2xl leading-[2rem] font-semibold md:w-5/12 w-3/4 mb-2"
            >
              What our patients frequently ask.
            </h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul class="faqs">
            <li
              class="py-7 border-b cursor-pointer select-none"
              v-for="(faq, i) in faqs"
              :index="i"
            >
              <div class="flex justify-between w-full md:items-center">
                <h5 class="text-base font-medium md:w-auto w-3/4">
                  {{ faq.question }}
                </h5>
                <div>
                  <div
                    class="border border-gray-500/70 p-2 rounded-full close transition-all"
                  >
                    <img
                      :src="getSrc('plus.svg')"
                      alt="Expand"
                      class="w-4 h-4 opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div
                class="answer leading-[2rem] opacity-0 relative h-0"
                v-html="faq.answer"
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { getSrc } from "@/assets/scripts";

const faqs = [
  {
    question: "How long will I have to stay in Florida for my first visit?",
    answer: `To allow sufficient time to reach the best possible recommendation for your care, you should come prepared to stay for at least one week. This gives the physicians enough time for a complete review of all your medical reports and information, including the information that you bring with you, and any additional tests that may be ordered during your stay.`,
  },
  {
    question: "How promptly can an appointment be scheduled?",
    answer: `Getting a cancer diagnosis from your doctor is life-changing, and we recognize the importance of your getting an appointment as soon as possible. Accommodating new and exiting patients is a priority, and we will schedule an appointment for you at your earliest convenience.`,
  },
  {
    question: "Is exercise recommended during treatment?",
    answer: `Yes, exercise has been shown to be safe for people going through active cancer treatments, and in fact can be one of the best ways to relieve some of the symptoms associated with your cancer or cancer treatment. Our physical therapist will pay close attention to your medical status to be certain to prescribe an exercise program that is safe for you throughout the course of your cancer journey.`,
  },
  {
    question: "Is it possible to continue working while in treatment?",
    answer: `Yes, many of our patients remain in their jobs and maintain a productive lifestyle during treatment. Our physicians are dedicated to finding the most effective balance of drug therapy to fight the cancer, yet minimally impact our patients’ daily routines, including work.`,
  },
  {
    question: "How is cancer pain managed?",
    answer: `For a tumor that causes pain, removing or destroying all or part of the tumor with chemotherapy or radiation can help. Pain control often starts with medicine. Many drugs are used to treat pain which the patient and their doctor determine and alter as pain level changes.`,
  },
  {
    question: "Why is screening helpful to early detection?",
    answer: `Screening helps find health problems before symptoms appear. Examples of screening tests include mammograms to find breast cancer and colonoscopy to find colon cancer. Early detection catches cancer when it's in a early, more treatable stage.`,
  },
];

onMounted(() => {
  const faqList = document.querySelectorAll(".faqs > li");
  Array.from(faqList).forEach((faq) => {
    faq.addEventListener("click", (event) => {
      const close = event.currentTarget.querySelector(".close");
      const answer = event.currentTarget.querySelector(".answer");
      answer.classList.toggle("h-0");
      answer.classList.toggle("opacity-100");
      answer.classList.toggle("mt-5");
      close.classList.toggle("rotate-45");
    });
  });
});
</script>
