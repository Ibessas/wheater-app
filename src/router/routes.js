const routes = [
  {
    name: 'Main',
    meta: { authenticated: true },
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Index', path: '', component: () => import('pages/Index.vue'), meta: { authenticated: true }, },
    ],
  },
  {
    meta: { authenticated: false },
    name: 'Login',
    path: '/login',
    component: () => import('pages/auth/Login.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
    meta: { authenticated: false },
  },
];

export default routes;
