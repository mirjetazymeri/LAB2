import { createRouter, createWebHistory } from 'vue-router'





const routes = [

  
  {
    path: '/listContacts',
    name: 'listContacts',
    component: () => import('../components/ListContactComponent'),
  },
  {
    path: '/createContacts',
    name: 'createContacts',
    component: () => import('../components/CreateContactComponent'),
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: () => import('../components/AboutUs')
  },

  
]

/* komponentet perbehen prej 3 pjeseve ato jane template script dhe style */

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
