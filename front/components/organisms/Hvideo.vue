<script setup lang="ts">
type prop = {
  roopNum: number;
};

const props = defineProps<prop>();
const card = ref({
  title: '動画の枠',
});
</script>

<template>
  <v-card>
    <!-- TODO: apiが出来次第作成 -->
    <v-img
      :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
      cover
    >
      <v-card-title class="text-white" v-text="card.title"></v-card-title>
    </v-img>

    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-heart"
      ></v-btn>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-bookmark"
      ></v-btn>

      <v-btn
        size="small"
        color="surface-variant"
        variant="text"
        icon="mdi-share-variant"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
