import { defineStore } from 'pinia';
import { notify } from '@kyvg/vue3-notification';
import http from '../plugins/http.plugin';

export interface SliderItemsInterface {
  id: number;
  image: string;
  name: string;
  name_eng: string;
  order: number;
  created_at: string;
  updated_at: string;
}
export interface SliderFormInterface {
  //   image: File;
  name: string;
  name_eng: string;
  order: number;
}

interface SliderStateInterface {
  items: Array<sliderItemsInterface>;
}
export const useSlider = defineStore('sliderStore', {
  state: (): SliderStateInterface => {
    return {
      items: [],
    };
  },
  getters: {
    getSliderItems: (state) => state.items,
  },
  actions: {
    async setSliderItems(q = '') {
      this.items = [];
      try {
        const { data } = await http.request({
          method: 'GET',
          url: 'slider',
          params: {
            q,
          },
        });
        this.items = data;
      } catch (error) {
        notify({
          type: 'error',
          text: 'დაფიქსირდა შეცდომა',
        });
      }
    },
    async deleteSliderItem(id: number) {
      try {
        const { data } = await http.request({
          method: 'POST',
          url: `slider/delete/${id}`,
        });

        notify({
          type: 'success',
          text: data.mass,
        });

        const selectIndex: number = this.items.findIndex((e) => e.id === id);
        this.items.splice(selectIndex, 1);
      } catch (error) {
        notify({
          type: 'error',
          text: 'დაფიქსირდა შეცდომა',
        });
      }
    },
    async createSliderItem(value: SliderFormInterface): Promise<void> {
      const fromData = new FormData();
      fromData.append('name', value.name);
      fromData.append('name_eng', value.name_eng);
      fromData.append('order', value.order);
      fromData.append('image', value.image);

      try {
        const { data } = await http.request({
          method: 'POST',
          url: `slider/create`,
          data: fromData,
        });

        notify({
          type: 'success',
          text: data.mass,
        });

        await this.setSliderItems();
      } catch (error) {
        notify({
          type: 'error',
          text: 'დაფიქსირდა შეცდომა',
        });
      }
    },

    async updateSliderItem(id: number, value: SliderFormInterface): Promise<void> {
      const fromData = new FormData();
      fromData.append('name', value.name);
      fromData.append('name_eng', value.name_eng);
      fromData.append('order', value.order);
      fromData.append('image', value.image);

      try {
        const { data } = await http.request({
          method: 'POST',
          url: `slider/update/${id}`,
          data: fromData,
        });

        notify({
          type: 'success',
          text: data.mass,
        });

        await this.setSliderItems();
      } catch (error) {
        notify({
          type: 'error',
          text: 'დაფიქსირდა შეცდომა',
        });
      }
    },
  },
});
