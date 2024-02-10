import './assets/scss/app.scss';

import createMyApp from './app';
import { useAuth } from './store/auth.store';
import http from './plugins/http.plugin';

const myApp = createMyApp();

(async (): Promise<void> => {
  const { router, app } = await myApp;

  http.init({
    baseApiUrl: 'http://109.205.46.87/api/',
  });

  router.isReady().then((): void => {
    app.mount('#app', true);
  });
})();
