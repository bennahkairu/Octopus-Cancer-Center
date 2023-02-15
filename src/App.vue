<script setup>
import Appointment from '@/components/Appointment.vue'
import Specialists from '@/components/Specialists.vue'
import Services from '@/components/Services.vue'
import Mission from '@/components/Mission.vue'
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
      <Mission />
      <Services />
      <Appointment />
      <Specialists />
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
