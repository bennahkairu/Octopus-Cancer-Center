<script setup>
import Appointment from '@/components/Appointment.vue'
import Services from '@/components/Services.vue'
import Doctors from '@/components/Doctors.vue'
import Cancers from '@/components/Cancers.vue'
import Layout from '@/components/Layout.vue'
import About from '@/components/About.vue'
import Hero from '@/components/Hero.vue'
import Faqs from '@/components/Faqs.vue'
</script>

<template>
  <main>
    <Layout>
      <Hero />
      <About />
      <Cancers />
      <Services />
      <Appointment />
      <Doctors />
      <Faqs />
    </Layout>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
