<script setup lang="ts"></script>

<template>
  <div class="content">
    <v-row>
      <v-col v-for="n in 9" :key="n" class="child-flex content__col" cols="6">
        <OrganismsHvideo :roopNum="n" />
      </v-col>
    </v-row>
  </div>
  <v-btn class="ma-5" color="primary">my-btn</v-btn>
</template>
