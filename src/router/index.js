import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/survey',
  },
  {
    path: '/survey',
    name: 'Survey',
    component: () => import(/* webpackChunkName: "survey" */ '../views/Survey/Index.vue'),
    meta: {
      title: "Encuesta en pruebas",
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
});

export default router
