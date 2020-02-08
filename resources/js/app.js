import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Hello from './components/Hello'
import Home from './components/Home'
import UsersIndex from "./components/UsersIndex";
import UsersEdit from "./components/UsersEdit";
import NotFound from "./components/NotFound";
import UsersCreate from "./components/UsersCreate";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
        {
            path: '/users/create',
            name: 'users.create',
            component: UsersCreate,
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
        },
        {
            path: '*',
            redirect: '/404',
        },

    ],
});

const app = new Vue({
    el: '#app',
    components: {App},
    router,
});
