<script lang="ts">
  import { useRoute } from "vue-router";

  import { getCryptoCoin } from "../services/api";
  import type { TCryptoCoin } from "../types/TCryptoCoin";

  import Skeleton from "../components/Skeleton.vue";

  export default {
    name: "CoinView",
    components: {
      Skeleton,
    },
    data() {
      return {
        isLoading: true,
        coin: {} as TCryptoCoin,
      };
    },
    setup() {
      const route = useRoute();
      const params = route.params as { id: string };

      return {
        params,
      };
    },
    methods: {
      async getCryptoData() {
        try {
          this.isLoading = true;

          const res = await getCryptoCoin(this.params.id);
          this.coin = res.data;
        } catch (err) {
          alert("Ocorreu um erro inesperado :C");
          console.log(err);
        } finally {
          this.isLoading = false;
        }
      },
    },
    mounted() {
      this.getCryptoData();
    },
  };
</script>

<template>
  <main v-if="!isLoading">
    <header>
      <div>
        <img
          :src="coin.image.small"
          alt="" />
        <h1>{{ coin.name }}</h1>
        <p>{{ coin.symbol }}</p>
      </div>

      <strong>{{ coin.current_price }}</strong>
    </header>
  </main>

  <main v-else>
    <Skeleton :height="32" />
  </main>
</template>
