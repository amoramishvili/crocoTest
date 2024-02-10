import { mount } from '@vue/test-utils';

import { beforeEach, describe, expect, it } from 'vitest';
import flushPromises from 'flush-promises';
import waitForExpect from 'wait-for-expect';

import chooseAmount from '../src/components/steps/chooseAmount.component.vue';

describe('choose amount page', () => {
  const wrapper = mount(chooseAmount);

  //   beforeEach(() => {
  //     wrapper.vm.state.maxAmount = 10000000000 / 100;
  //     wrapper.vm.state.minAmount = 30000000 / 100;
  //     wrapper.vm.state.unit = 'UZS';
  //   });

  //   it('exist form', () => {
  //     expect(wrapper.find('form').exists()).toBe(true);
  //     expect(wrapper.find('input').exists()).toBe(true);
  //     expect(wrapper.find('#SpaceButton').exists()).toBe(true);
  //     expect(wrapper.find('#amountSlider').exists()).toBe(true);
  //   });

  //   it('it min amount validate ', async () => {
  //     await wrapper.find('input').setValue('100');
  //     await flushPromises();
  //     await waitForExpect(async () => {
  //       expect(wrapper.find('.error-text').text()).toBe(
  //         wrapper.vm.$t('requestedLoanAmountIsLessThanMinimumOf', {
  //           amount: wrapper.vm.numberFormatMock(wrapper.vm.state.minAmount),
  //         })
  //       );
  //     });
  //   });

  //   it('it max amount validate ', async () => {
  //     await wrapper.find('input').setValue('100000000000000000');
  //     await flushPromises();
  //     await waitForExpect(async () => {
  //       expect(wrapper.find('.error-text').text()).toBe(
  //         wrapper.vm.$t('requestedLoanAmountIsExceedsTheMaximumLimitOf', {
  //           amount: wrapper.vm.numberFormatMock(wrapper.vm.state.maxAmount),
  //         })
  //       );
  //     });
  //   });
});
