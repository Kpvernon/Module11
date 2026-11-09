import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Quotes from '../views/Quotes.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: About },
    { path: '/quotes', component: Quotes },
    { path: '/contact', component: Contact },
    {
      path: '/:pathMatch(.*)*', component: PageNotFound
    }
  ],
})

export default router
