<template>
  <aside
    class="absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden bg-gray-1 rounded-tr-md rounded-br-md lg:static lg:translate-x-0 -translate-x-full"
  >
    <div class="flex items-center justify-between pt-16 pb-7 flex-col">
      <Logo />

      <a
        href="https://crocobet.com/"
        target="_blank"
        class="rounded-xl bg-green-1 py-1.5 px-4 flex items-center mt-8 text-white font-neue-medium text-sm"
      >
        <icon name="ArrowRight" class="mr-2" />
        crocobet.com
      </a>
    </div>
    <ul class="overflow-y-auto">
      <li v-for="(item, i) in navStore.getNavigation" :key="i">
        <RouterLink
          :to="item.routeName"
          :class="[
            'group',
            'relative',
            'flex',
            'items-center',
            'py-6',
            'px-4',
            'duration-300',
            'ease-in-out',
            'hover:bg-white',
            'hover:border-b-gray-1',
            'border-b',
            'text-base',
            'font-neue-medium',
            'text-gray-6',
            route.name == item.routeName ? 'border-b-gray-1' : 'border-b-gray-5',
            route.name == item.routeName ? 'bg-white border-t' : '',
          ]"
        >
          <icon :name="item.icon" class="mr-4 fill-current text-gray-6" />
          <span class="pt-0.5"> {{ item.name }}</span>
          <div
            :class="[
              'absolute',
              'w-1.5',
              'h-full',
              'right-0',
              'top-0',
              ' duration-300',
              'ease-in-out',
              'group-hover:bg-green-1',

              route.name == item.routeName ? 'bg-green-1' : '',
            ]"
          ></div>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
import { Ref, defineComponent } from 'vue';
import Logo from '../../assets/icons/logo.svg?component';
import { useNavigation } from '../../store/navigation.store';
import { useRoute } from 'vue-router';

export default defineComponent({
  components: {
    Logo,
  },
  setup() {
    const route = useRoute();
    const navStore = useNavigation();
    return {
      navStore,
      route,
    };
  },
});
</script>
