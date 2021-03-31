import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Todo from '@/views/Todo.vue'
import TodoDetail from '@/views/TodoDetail'
import User from '@/views/User.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/user/:name',
    name: 'User',
    component: User,
    props: true,
  },
  {
    path: '/detail/:id',
    name: 'TodoDetail',
    component: TodoDetail,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
