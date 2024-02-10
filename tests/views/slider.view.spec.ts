import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import { describe } from 'vitest';
import { useRoute } from 'vue-router';

import slider from '../../src/views/slider/index.view.vue';

vi.mock('vue-router', () => ({ useRoute: vi.fn() }));
vi.mocked(useRoute).mockReturnValue({ name: 'slider' });

describe('slider view', () => {
  const wrapper = mount(slider, {
    shallow: false,
  });

  it('exist header', () => {
    expect(wrapper.find('.page-header').exists()).toBe(true);
    expect(wrapper.find('.page-header').text()).toBe('სლაიდერი');
    expect(wrapper.find('.page-header  input').exists()).toBe(true);
  });
  it('exist add modal and button', async () => {
    expect(wrapper.find('.add-button').exists()).toBe(true);
    wrapper.find('.add-button').trigger('click');
    await nextTick();
    expect(wrapper.find('.add-modal').exists()).toBe(true);
  });
});
