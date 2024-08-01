<script setup lang="ts">
import { Plus } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
</script>

<template>
  <header :class="
    cn(
      'fixed z-20 bottom-0 inset-x-0',
      'flex h-16 items-center justify-center border-t bg-background px-4 md:px-6',
    )
  ">
    <nav class="gap-4 font-medium flex items-center">
      <RouterLink
        to="/"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        Home
      </RouterLink>
      <Button class="-mt-[30%]">
        <Plus />
      </Button>
      <RouterLink
        to="/history"
        class="text-muted-foreground transition-colors hover:text-foreground"
      >
        History
      </RouterLink>
    </nav>
  </header>
</template>
