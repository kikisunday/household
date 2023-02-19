<script setup lang="ts"></script>

<template>
  <h1>ドッキリ動画保存庫</h1>
  <div class="test">
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <OrganismsHvideo :roopNum="n" />
      </v-col>
    </v-row>
  </div>
  <v-btn class="ma-5" color="primary">my-btn</v-btn>
</template>
