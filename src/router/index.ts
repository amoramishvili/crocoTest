import {
  createRouter as createVueRouter,
  createWebHistory,
  RouteLocationNormalized,
  Router,
  RouteRecordRaw,
} from 'vue-router';
import Layout from '../enums/layout.enum';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/slider',
    name: 'slider',
    component: () => import('../views/slider/index.view.vue'),
    meta: {
      layout: Layout.Dashboard,
    },
  },
  {
    path: '/:notFound',
    component: () => import('../views/pageNotFound.vue'),
    meta: {
      layout: Layout.Dashboard,
    },
  },
];

const createRouter = (): Router => {
  const router: Router = createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        redirect: '/slider',
      },

      ...routes,
    ],
  });

  return router;
};

export default createRouter;
