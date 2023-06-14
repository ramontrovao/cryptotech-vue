import { api } from "./axios";

export const getCryptoCoins = async () => {
  const data = await api.get("/coins/markets", {
    params: {
      vs_currency: "brl",
    },
  });

  return data;
};

export const getCryptoCoin = async (coinId: string) => {
  const data = await api.get(`/coins/${coinId}`, {
    params: {
      vs_currency: "brl",
    },
  });

  return data;
};
