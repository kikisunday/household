<script setup>
const links = [''];
</script>

<template>
  <v-app>
    <v-app-bar color="teal-darken-4 header">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>ドッキリ動画保存庫</v-app-bar-title>
    </v-app-bar>
    <slot />
    <v-footer class="bg-grey-lighten-1 fotter">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>ドッキリ動画保存庫</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>
