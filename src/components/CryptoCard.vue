<script lang="ts">
  import { PhEye } from "@phosphor-icons/vue";

  export default {
    name: "CryptoCard",
    props: {
      name: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
      currentPrice: {
        type: Number,
        required: true,
      },
    },
    components: {
      PhEye,
    },
  };
</script>

<template>
  <a
    class="w-full p-8 max-h-12 flex justify-between items-center bg-zinc-100 rounded-md transition-all duration-300 hover:shadow-xl"
    :href="url">
    <img
      class="w-8 h-8"
      :src="imageUrl"
      alt="" />

    <p class="text-center">{{ name }}</p>

    <strong
      v-if="currentPrice > 0"
      class="text-green-600"
      >+ R${{ currentPrice }}</strong
    >
    <strong
      v-else
      class="text-red-600"
      >- R${{ currentPrice * -1 }}</strong
    >
  </a>
</template>
