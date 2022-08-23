import { createRouter, createWebHistory } from 'vue-router'
import SkillView from '../views/SkillView.vue'
import ProfilView from '../views/ProfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profil',
      component: ProfilView
    },
    {
      path: '/skill',
      name: 'skill',
      component: SkillView
    }
  ]
})

export default router
