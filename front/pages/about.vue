<script setup>
const enableCustomLayout = () => {
  setPageLayout('custom')
}

const unko = ref('aaa')
</script>

<template>
  <h1>
    {{ unko }}
    <button @click="enableCustomLayout">updateLayout</button>
  </h1>
</template>

<script>
definePageMeta({
  layout: false,
})
</script>
