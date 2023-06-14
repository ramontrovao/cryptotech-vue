<script lang="ts">
  import { PhMagnifyingGlass } from "@phosphor-icons/vue";

  import { getCryptoCoins } from "../services/api";
  import type { TCryptoCoin } from "../types/TCryptoCoin";

  import CryptoCard from "../components/CryptoCard.vue";
  import Skeleton from "../components/Skeleton.vue";

  export default {
    name: "HomeView",
    components: {
      PhMagnifyingGlass,
      CryptoCard,
      Skeleton,
    },
    data() {
      return {
        isLoading: true,
        search: "",
        cryptos: [] as TCryptoCoin[],
        cryptosFiltered: [] as TCryptoCoin[],
      };
    },
    methods: {
      async getCryptoData() {
        try {
          this.isLoading = true;

          const res = await getCryptoCoins();
          this.cryptos = res.data;
        } catch (err) {
          alert("Ocorreu um erro inesperado :C");
          console.log(err);
        } finally {
          this.isLoading = false;
        }
      },
    },
    updated() {
      this.cryptosFiltered = this.cryptos.filter((crypto) =>
        crypto.name.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    mounted() {
      this.getCryptoData();
    },
  };
</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-green-500 to-green-300">
    <section class="max-w-[1100px] m-auto">
      <div>
        <div
          class="w-full p-2 flex gap-2 justify-center items-center bg-zinc-800 rounded-md">
          <PhMagnifyingGlass
            class="text-green-300"
            :size="24" />

          <input
            v-model="search"
            class="h-12 p-4 flex-1 bg-transparent text-white outline-none border-none"
            placeholder="Pesquise por cryptocoins"
            type="text" />
        </div>
      </div>

      <div
        v-if="!isLoading"
        class="mt-8 flex flex-col gap-4">
        <CryptoCard
          v-if="cryptosFiltered.length === 0"
          v-for="crypto in cryptos"
          :name="crypto.name"
          :image-url="crypto.image"
          :url="`/coin/${crypto.id}`"
          :current-price="crypto.current_price" />

        <CryptoCard
          v-else
          v-for="crypto in cryptosFiltered"
          :name="crypto.name"
          :image-url="crypto.image"
          :url="`/coin/${crypto.id}`"
          :current-price="crypto.current_price" />
      </div>

      <div
        v-else
        class="mt-8 flex flex-col gap-4">
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
        <Skeleton :height="16" />
      </div>
    </section>
  </main>
</template>
