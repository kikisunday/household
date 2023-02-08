<script setup>
const enableCustomLayout = () => {
  setPageLayout('custom')
}
</script>

<template>
  <h1>
    <button @click="enableCustomLayout">updateLayout</button>
  </h1>
</template>

<script>
definePageMeta({
  layout: false,
})
</script>
