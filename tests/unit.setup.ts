import { config } from '@vue/test-utils';
import spaceWebComponents from 'space.web.components';
import { createPinia } from 'pinia';
import vHeader from '../src/components/common/header.component.vue';
import VeeValidate from '../src/validators/index';
import i18n from '../src/locales';
import { numberFormat as numberFormatMock } from '../src/utils/numbers.utli';

config.global = {
  mocks: {
    $t: (msg, obj) => i18n.global.t(msg, obj),
    numberFormatMock: (msg) => numberFormatMock(msg),
  },
  plugins: [createPinia(), VeeValidate, i18n, spaceWebComponents],
  components: {
    VHeader: vHeader,
  },
};
