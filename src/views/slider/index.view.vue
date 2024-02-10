<template>
  <pageHeader @onSearch="sliderStore.setSliderItems"></pageHeader>
  <sliderAddItem v-if="!updateModalShow"></sliderAddItem>
  <sliderEditItem :item="updateModalItem" @onClose="updateModalShow = false" v-if="updateModalShow"></sliderEditItem>/
  <div class="bg-gray-1 rounded-md p-4 mt-8 2xl:p-8" v-if="!!sliderStore.getSliderItems.length">
    <template v-for="(item, i) in sliderStore.getSliderItems" :key="i">
      <sliderItem :item="item" @onDelete="sliderStore.deleteSliderItem" @onUpdate="UpdateModal"></sliderItem>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, ref, Ref } from 'vue';
import pageHeader from '../../components/common/pageHeader.component.vue';
import sliderItem from '../../components/sliders/sliderItem.component.vue';
import sliderAddItem from '../../components/sliders/sliderAddItem.component.vue';
import sliderEditItem from '../../components/sliders/sliderEditItem.component.vue';

import { SliderItemsInterface, useSlider } from '../../store/slider.store';

export default defineComponent({
  components: {
    pageHeader,
    sliderItem,
    sliderEditItem,
    sliderAddItem,
  },

  setup() {
    const sliderStore = useSlider();
    const updateModalShow: Ref<boolean> = ref(false);
    const updateModalItem: Ref<SliderItemsInterface> = ref(null);
    const UpdateModal = (items): void => {
      updateModalShow.value = true;
      updateModalItem.value = items;
    };

    onBeforeMount(async () => {
      await sliderStore.setSliderItems();
    });
    return {
      sliderStore,
      UpdateModal,
      updateModalItem,
      updateModalShow,
    };
  },
});
</script>
