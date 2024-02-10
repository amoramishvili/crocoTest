<template>
  <div class="bg-gray-1 rounded-md p-4 2xl:p-8 mt-4 2xl:mt-8">
    <div class="flex items-center">
      <div class="flex items-center font-neue-medium text-sm">
        <icon :name="props.icon" v-if="props.icon" class="mr-4" />
        {{ props.title }}
      </div>
      <div class="flex-grow"></div>
      <button
        class="rounded-full w-8 h-8 bg-gray-4 border border-gray-4 flex items-center flex-row justify-center"
        @click="onClose"
      >
        <icon name="Close" />
      </button>
    </div>
    <div class="p-4 2xl:p-8 bg-white rounded-md mt-4 2xl:mt-8">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    onClose: Function as PropType<() => void>,
    title: {
      type: String,
      default: '',
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const onClose = (): void => {
      emit('onClose');
    };
    return {
      props,
      onClose,
    };
  },
});
</script>
