import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import NewProducts from '../views/Products/NewProducts.vue'
import Collection from '../views/Products/Collection.vue'
import ShopByLook from '../views/ShopByLook.vue'
import TwistZone from '../views/TwistZone.vue'
import Outlet from '../views/Products/Outlet.vue'
import UserPage from '../views/User/UserPage.vue'
import UserPageKayit from '../views/User/UserPageKayit.vue'
import UrunSayfasi from '../views/Urun/UrunSayfasi.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NewProducts',
    name: 'NewProducts',
    component : NewProducts
  },
  {
    path: '/Collection',
    name: 'Collection',
    component : Collection
  },
  {
    path: '/ShopByLook',
    name: 'ShopByLook',
    component : ShopByLook
  },
  {
    path: '/TwistZone',
    name: 'TwistZone',
    component : TwistZone
  },
  {
    path: '/Outlet',
    name: 'Outlet',
    component : Outlet
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component : UserPage
  },
  {
    path: '/UserPageKayit',
    name: 'UserPageKayit',
    component : UserPageKayit
  },
  {
    path: '/UrunSayfasi',
    name: 'UrunSayfasi',
    component : UrunSayfasi
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
