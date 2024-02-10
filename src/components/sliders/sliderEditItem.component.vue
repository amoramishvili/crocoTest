<template>
  <modal title="სლაიდერის  რედაქტირება" icon="plus2" @onClose="onClose">
    <Form class="grid gap-4" @submit="onSubmit" enctype="multipart/form-data">
      <textInput name="name" placeholder="სათაური (ქართ)" :rules="{ required: true }" :value="props.item.name" />
      <textInput
        name="name_eng"
        placeholder="სათაური (ინგლ)"
        :rules="{ required: true }"
        :value="props.item.name_eng"
      />
      <fileInput
        name="image"
        placeholder="ატვირთე სურათი"
        :rules="{ mimes: ['image/jpeg', 'image/png', 'image/webp'], size: 2048 }"
        accept="image/png,image/jpeg,image/webp"
      />
      <textInput
        name="order"
        placeholder="რიგითობა"
        :rules="{ required: true, numeric: true }"
        :value="String(props.item.order)"
      />

      <div class="flex mt-4">
        <div class="flex-grow"></div>
        <button
          class="bg-gray-1 rounded-xl py-4 w-64 text-black text-sm font-neue-medium mr-4"
          type="button"
          @click="onClose"
        >
          დახურვა
        </button>
        <button class="bg-green-1 rounded-xl py-4 w-64 text-white text-sm font-neue-medium" type="submit">
          სლაიდერის რედაქტირება
        </button>
        <div class="flex-grow"></div>
      </div>
    </Form>
  </modal>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Field, Form } from 'vee-validate';
import modal from '../utils/modal.component.vue';
import { SliderFormInterface, SliderItemsInterface, useSlider } from '../../store/slider.store';

export default defineComponent({
  props: {
    onClose: Function as PropType<() => void>,
    item: {
      type: Object as PropType<SliderItemsInterface>,
      default: {},
    },
  },
  components: {
    modal,
    Form,
    Field,
  },
  setup(props, { emit }) {
    const updateData = computed(() => props.item);
    const sliderStore = useSlider();

    const onClose = (): void => {
      emit('onClose');
    };
    const onSubmit = async (value: SliderFormInterface, { resetForm }): Promise<void> => {
      await sliderStore.updateSliderItem(props.item.id, value);
      resetForm();
      onClose();
    };
    return {
      onSubmit,
      updateData,
      props,
      onClose,
    };
  },
});
</script>
