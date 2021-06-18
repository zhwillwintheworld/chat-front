import {
    createWebHashHistory,
    createRouter
} from "vue-router";
import Login from '../components/Login'
import Chat from '../components/Chat'

let routes =[
    {
        path:"/",
        component: ()=> Login
    },
    {
        path: "/chat",
        component: ()=> Chat
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router