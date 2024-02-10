import { createPinia, Pinia } from 'pinia';

const createStore = (): Pinia => {
  return createPinia();
};

export default createStore;
