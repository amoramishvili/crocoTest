<template>
  <button class="bg-green-1 px-5 py-4 rounded-sm mt-8 ml-8 text-white font-neue-medium text-sm flex items-center">
    <icon name="plue" class="mr-4" /> {{ props.title }} <icon name="arrowDown" class="ml-4" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {
      props,
    };
  },
});
</script>
