<script setup lang="ts">
import { useBalance } from '@/composables';

const { total, income, expenses } = useBalance();
</script>

<template>
  <section class="mt-[20vh] flex justify-between items-center gap-4">
    <article class="col-span-2">
      <h1>Your Balance</h1>
      <h2 class="text-5xl">${{ total }}</h2>
    </article>

    <div class="flex flex-col gap-4">
      <article>
        <h1>Income</h1>
        <h2 class="text-3xl text-green-600">${{ income }}</h2>
      </article>
  
      <article>
        <h1>Expenses</h1>
        <h2 class="text-3xl text-red-600">${{ expenses }}</h2>
      </article>
    </div>
  </section>
</template>
