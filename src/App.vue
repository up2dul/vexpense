<script setup lang="ts">
import { RouterView } from 'vue-router';

import { Header } from '@/components/common';
</script>

<template>
  <Header />

  <main class="pt-8 pb-16 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
