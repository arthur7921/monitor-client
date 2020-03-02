import Layout from '@layout/Layout'

export const home = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "project-table" */ './Home.vue')
      }
    ]
  }
]
