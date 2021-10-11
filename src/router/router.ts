import {
    createWebHistory,
    createRouter
} from "vue-router";


let routes =[
    {
        path:"/",
        component: ()=> import("../components/Chat")
    },
    {
        path: "/chat",
        component: ()=> import("../components/Chat")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

export default router
