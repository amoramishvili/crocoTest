<template>
  <component :is="view" />
</template>
<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import { RouteLocationNormalized, useRoute } from 'vue-router';
import dashboardLayout from './dashboard.layout.vue';

export default defineComponent({
  components: {
    dashboardLayout,
  },
  setup(): {
    route: RouteLocationNormalized;
    view: ComputedRef<string | null>;
  } {
    const route: RouteLocationNormalized = useRoute();
    const view = computed(() => route.meta?.layout) as unknown as ComputedRef<string | null>;
    return {
      view,
      route,
    };
  },
});
</script>
