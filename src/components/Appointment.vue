<template>
  <section class="py-24 bg-primary text-white" id="about-us">
    <div class="container relative z-1">
      <div class="flex">
        <div class="w-[18%] mt-2"><img class="w-12" src="images/octo-fav.svg" /></div>
        <div class="flex-1">
          <div class="flex items-start justify-between">
            <h3 class="pb-4 text-4xl leading-snug font-semibold w-1/2 mb-2">Make an appointment with us.</h3>
            <div class="mt-3">
              <div class="triangle-notch rotate-[135deg]"></div>
            </div>
          </div>
          <div class="mt-12">
            <h3 class="font-semibold text-lg mb-6">About yourself</h3>
            <div class="flex flex-wrap gap-y-6">
              <label class="w-1/2">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
                  type="text" placeholder="Full name" />
              </label>
              <label class="w-1/2">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
                  type="email" placeholder="Email Address" />
              </label>
              <label>
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
                  type="email" placeholder="Phone Number" />
              </label>
            </div>
          </div>
          <div class="mt-16">
            <h3 class="font-semibold text-lg mb-6">Admission data</h3>
            <div class="flex flex-wrap gap-y-6">
              <label class="w-1/2">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
                  type="text" placeholder="Date" />
              </label>
              <label class="w-1/2">
                <input
                  class="placeholder:text-gray-200 border border-slate-400 px-6 py-3 rounded-full bg-transparent text-gray-200"
                  type="email" placeholder="Time" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
