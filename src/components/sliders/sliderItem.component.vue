<template>
  <div class="rounded-sm p-2 bg-white flex items-center mb-4 last:mb-0">
    <div class="flex max-w-xl">
      <img :src="props.item.image" alt="" class="rounded-sm w-28 h-17 object-cover" />
      <div class="pl-4 text-base font-neue-Regular flex flex-col justify-between">
        <h2 class="text-gray-5">{{ props.item.name }}</h2>
        <p class="text-base font-neue-Regular text-gray-5">{{ formatDate(props.item.created_at) }}</p>
      </div>
    </div>

    <div class="flex-grow"></div>
    <div class="flex gap-3 mr-2 2xl:mr-4 flex-col 2xl:flex-row">
      <editButton @click="onUpdate(props.item)" />
      <deleteButton @click="onDelete(props.item.id)" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import moment from 'moment';
import { SliderItemsInterface } from '../../store/slider.store';

export default defineComponent({
  props: {
    onDelete: Function as PropType<() => number>,
    onUpdate: Function as PropType<() => SliderItemsInterface>,
    item: {
      type: Object as PropType<SliderItemsInterface>,
      default: {},
    },
  },
  setup(props, { emit }) {
    const formatDate = computed(() => (date: string) => moment(date).format('DD.MM.YYYY'));
    const onDelete = (id: number): void => {
      emit('onDelete', id);
    };
    const onUpdate = (item: SliderItemsInterface): void => {
      emit('onUpdate', item);
    };

    return {
      props,
      moment,
      formatDate,
      onDelete,
      onUpdate,
    };
  },
});
</script>
