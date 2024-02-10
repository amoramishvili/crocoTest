import { createApp } from 'vue';
import type { App as Application } from 'vue';
import { Router } from 'vue-router';
import { Pinia } from 'pinia';
import VeeValidate from './validators/index';
import App from './layouts/app.layout.vue';
import createRouter from './router';
import createStore from './store';
import icon from './components/utils/icon.component.vue';
import deleteButton from './components/buttons/delete.component.vue';
import editButton from './components/buttons/edit.component.vue';
import addButton from './components/buttons/add.component.vue';
import textInput from './components/inputs/text.component.vue';
import fileInput from './components/inputs/file.component.vue';

import Notifications from '@kyvg/vue3-notification';

const createMyApp = async (): Promise<{
  app: Application<Element>;
  router: Router;
}> => {
  const app: Application<Element> = createApp(App);

  const store: Pinia = createStore();
  const router: Router = createRouter();

  app.use(router);
  app.use(store);
  app.use(VeeValidate);
  app.use(Notifications);

  app.component('icon', icon);
  app.component('deleteButton', deleteButton);
  app.component('editButton', editButton);
  app.component('addButton', addButton);
  app.component('textInput', textInput);
  app.component('fileInput', fileInput);

  return { app, router };
};

export default createMyApp;
