import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutUsView.vue";
import ContactUsView from "../views/ContactUsView.vue";
import PrivacyPolicyView from "../views/PrivacyPolicyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-us',
      name: 'about us',
      component: AboutUsView
    },
    {
      path: '/contact-us',
      name: 'contact us',
      component: ContactUsView
    },
    {
        path: '/privacy-policy',
        name: 'Privacy policy',
        component: PrivacyPolicyView
      },
    
    
  ]
})

export default router
