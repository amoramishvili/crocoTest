<template>
  <div class="w-full bg-white rounded-sm p-9 flex items-center page-header">
    <button>
      <icon name="Arrow" />
    </button>
    <h1 class="flex font-neue-medium items-center ml-5 amo">
      <icon :name="activePage.icon" class="mr-3" /> <span class="pt-0.5">{{ activePage.name }}</span>
    </h1>
    <div class="flex-grow"></div>
    <div class="flex rounded-lg p-4 bg-gray-3 items-center">
      <icon name="Search" class="mr-4" />
      <input
        type="text"
        class="bg-gray-3 font-neue-Regular text-sm w-60 focus:outline-none"
        placeholder="ძიება"
        v-model="searchValue"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType, Ref, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { NavigationMenuInterface, useNavigation } from '../../store/navigation.store';

export default defineComponent({
  props: {
    onSearch: Function as PropType<() => number>,
  },

  setup(_, { emit }) {
    const searchValue: Ref<string> = ref('');
    const navStore = useNavigation();
    const route = useRoute();
    const activePage: ComputedRef<NavigationMenuInterface | undefined> = computed(() =>
      navStore.getNavigation.find((e) => e.routeName === route.name)
    );

    watch(
      () => searchValue.value,
      (newVal: string, oldVal: string) => {
        if ((newVal !== oldVal && newVal.length > 3) || newVal.length === 0) {
          emit('onSearch', newVal);
        }
      }
    );

    return {
      activePage,
      searchValue,
    };
  },
});
</script>
