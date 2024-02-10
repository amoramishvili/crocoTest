<template>
  <div class="flex h-screen overflow-hidden bg-gray-2">
    <Sidebar />
    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
  <notifications />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from '../components/common/sidebar.component.vue';

export default defineComponent({
  components: {
    Sidebar,
  },
  setup() {
    return {};
  },
});
</script>
