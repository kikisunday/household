<script setup lang="ts">
const enableCustomLayout = () => {
    setPageLayout('custom');
};

const test = ref<string>('aaa');
</script>

<template>
    <h1>
        {{ test }}
        <button @click="enableCustomLayout">updateLayout</button>
    </h1>
</template>

<script lang="ts">
definePageMeta({
    layout: false,
});
</script>
