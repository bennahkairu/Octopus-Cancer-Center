<template>
  <section id="services" class="lg:pt-14 pb-20">
    <div class="container relative z-1">
      <div class="flex">
        <h6 class="font-semibold text-base mt-2 w-[18%] lg:block hidden">Services</h6>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3 class="pb-4 lg:text-4xl md:text-3xl md:leading-snug text-2xl leading-[2rem] font-semibold md:w-1/2 w-8/12 mb-2">
              Excellent services of our clinic.
            </h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>

          <ul class="services">
            <li
              class="border-b cursor-pointer relative py-7 select-none"
              v-for="(service, i) in services"
              :index="i"
            >
              <div class="flex justify-between w-full items-center">
                <h5 class="text-base font-medium">{{ service.label }}</h5>
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
              <div
                class="description leading-[2rem] opacity-0 relative h-0"
                v-html="service.description"
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

const services = [
  {
    label: "Cancer Treatment",
    description: `Octopus cancer center offer treatment services to cancer patients. The cancer treatment services at Octopus are diverse and include treatment in: <span class="font-semibold">Skin cancer, Lung cancer, Stomach Cancer, Leukemia, Breast cancer, Endocrine cancer</span> to mention a few. Please <a href="#appointment">book an appointment</a>.
      `,
  },
  {
    label: "Palliative care",
    description:
      "Octopus Cancer Center offers palliative care to clients with deteriorating health due to cancer. The palliative care services include acupuncture, pain management, mental health support, and care giver support.",
  },
  {
    label: "Specialist Consultation & Vistis",
    description:
      "Octopus Cancer Center will allow clients to have regular visits with different specialists such as, gynecologist, neurologist, and oncologists. This service is aimed at helping the clients to maintain regular screening and checkups with their doctors.",
  },
  {
    label: "Cancer Screening",
    description:
      "This department offers cancer-screening services. The department is equipped with specialist and advanced technology to provide quality screening services. The cancer screening services include, lung, stomach, brain, breast, bone, leukemia, and skin cancer screening.",
  },
  {
    label: "Mental health services",
    description:
      "This department offers counseling and therapies to patients and care givers. It aims at providing psychological, social, and spiritual support to improve their mental health wellness by helping them cope with despair in life and life threatening illness.",
  },
  {
    label: "Nutritional Services",
    description:
      `Octopus Cancer Center believes on the phrase <span class="font-semibold">“We are what we eat”</span>. The department works with clients to help live a healthy living. It includes services as such as diet planning.`,
  },
];

onMounted(() => {
  const serviceList = document.querySelectorAll(".services > li");
  Array.from(serviceList).forEach((service) => {
    service.addEventListener("click", (event) => {
      const close = event.currentTarget.querySelector(".close");
      const description = event.currentTarget.querySelector(".description");
      description.classList.toggle("h-0");
      description.classList.toggle("opacity-100");
      description.classList.toggle("mt-5");
      close.classList.toggle("rotate-45");
    });
  });
});
</script>
