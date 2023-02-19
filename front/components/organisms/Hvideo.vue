<script setup lang="ts">
type prop = {
  roopNum: number;
};

const props = defineProps<prop>();
</script>

<template>
  <div>
    <v-img
      :src="`https://picsum.photos/500/300?image=${props.roopNum! * 5 + 10}`"
      :lazy-src="`https://picsum.photos/10/6?image=${props.roopNum! * 5 + 10}`"
      aspect-ratio="1"
      cover
      class="bg-grey-lighten-2"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </div>
</template>
