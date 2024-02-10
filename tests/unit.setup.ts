import { config } from '@vue/test-utils';
import { createPinia } from 'pinia';

import icon from '../src/components/utils/icon.component.vue';
import deleteButton from '../src/components/buttons/delete.component.vue';
import editButton from '../src/components/buttons/edit.component.vue';
import addButton from '../src/components/buttons/add.component.vue';
import textInput from '../src/components/inputs/text.component.vue';
import fileInput from '../src/components/inputs/file.component.vue';

import VeeValidate from '../src/validators/index';

config.global = {
  mocks: {},
  plugins: [createPinia(), VeeValidate, i18n],
  components: {
    icon,
    deleteButton,
    editButton,
    addButton,
    textInput,
    fileInput,
  },
};
