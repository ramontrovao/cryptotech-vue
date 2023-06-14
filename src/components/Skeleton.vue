<script lang="ts">
  export default {
    name: "Skeleton",
    props: {
      height: {
        type: Number,
        required: true,
      },
    },
  };
</script>

<template>
  <div :class="`w-full h-${height} bg-gray-300 rounded-md animate-pulse`" />
</template>
