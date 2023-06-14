<script lang="ts">
  export default {
    name: "Header",
  };
</script>

<template>
  <header class="bg-zinc-100 min-h-[11rem] flex justify-center items-center">
    <RouterLink to="/">
      <img
        class="w-16 h-16"
        src="/logo.png"
        alt="" />
    </RouterLink>
  </header>
</template>
