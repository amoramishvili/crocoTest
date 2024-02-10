<template>
  <addButton @click="showModal = true" v-if="!showModal" title="სლაიდერის დამატება" class="add-button" />
  <modal title="სლაიდერის დამატება" icon="plus2" v-if="showModal" @onClose="showModal = false" class="add-modal">
    <Form class="grid gap-4" @submit="onSubmit" enctype="multipart/form-data">
      <textInput name="name" placeholder="სათაური (ქართ)" :rules="{ required: true }" />
      <textInput name="name_eng" placeholder="სათაური (ინგლ)" :rules="{ required: true }" />
      <fileInput
        name="image"
        placeholder="ატვირთე სურათი"
        :rules="{ required: true, mimes: ['image/jpeg', 'image/png', 'image/webp'], size: 2048 }"
        accept="image/png,image/jpeg,image/webp"
      />
      <textInput name="order" placeholder="რიგითობა" :rules="{ required: true, numeric: true }" value="1" />

      <div class="flex mt-4">
        <div class="flex-grow"></div>
        <button
          class="bg-gray-1 rounded-xl py-4 w-64 text-black text-sm font-neue-medium mr-4"
          type="button"
          @click="showModal = false"
        >
          დახურვა
        </button>
        <button class="bg-green-1 rounded-xl py-4 w-64 text-white text-sm font-neue-medium" type="submit">
          სლაიდერის დამატება
        </button>
        <div class="flex-grow"></div>
      </div>
    </Form>
  </modal>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import { Field, Form } from 'vee-validate';
import modal from '../utils/modal.component.vue';
import { SliderFormInterface, useSlider } from '../../store/slider.store';

export default defineComponent({
  components: {
    modal,
    Form,
    Field,
  },
  setup() {
    const showModal: Ref<boolean> = ref(false);
    const sliderStore = useSlider();
    const onSubmit = async (value: SliderFormInterface, { resetForm }): Promise<void> => {
      await sliderStore.createSliderItem(value);
      resetForm();
    };
    return {
      onSubmit,
      showModal,
    };
  },
});
</script>
