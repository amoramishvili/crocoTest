import { defineStore } from 'pinia';

export interface NavigationMenuInterface {
  name: string;
  icon: string;
  routeName: string;
}

interface NavigationStateInterface {
  menu: Array<NavigationMenuInterface>;
}
export const useNavigation = defineStore('navigationStore', {
  state: (): NavigationStateInterface => {
    return {
      menu: [
        {
          name: 'კონტენტი',
          icon: 'Document',
          routeName: 'content',
        },
        {
          name: 'პარამეტრები',
          icon: 'Setting',
          routeName: 'parameters',
        },
        {
          name: 'ადმინები',
          icon: 'Profile2Use',
          routeName: 'admins',
        },
        {
          name: 'ლიდერბორდი',
          icon: 'Cup',
          routeName: 'leaderboard',
        },
        {
          name: 'კალენდარი',
          icon: 'Calendar',
          routeName: 'calendar',
        },
        {
          name: 'პარტნიორები',
          icon: 'People',
          routeName: 'partners',
        },
        {
          name: 'ფოტო გალერეა',
          icon: 'Gallery',
          routeName: 'photoGallery',
        },
        {
          name: 'ვიდეო გალერეა',
          icon: 'VideoSquare',
          routeName: 'videoGallery',
        },
        {
          name: 'სლაიდერი',
          icon: 'ScreenMirroring',
          routeName: 'slider',
        },
        {
          name: 'სიახლეები',
          icon: 'Flash',
          routeName: 'news',
        },
        {
          name: 'მენიუ',
          icon: 'Dots',
          routeName: 'menu',
        },
      ],
    };
  },
  getters: {
    getNavigation: (state) => state.menu,
  },
  actions: {},
});
