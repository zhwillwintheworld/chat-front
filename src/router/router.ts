import {
    createWebHistory,
    createRouter
} from "vue-router";


let routes = [
    {
        path: "/",
        component: () => import("../components/Login")
    },
    {
        path: "/chat",
        component: () => import("../components/Chat"),
        children: [
            {
                path: '/',
                component: ()=> import("../components/chat/FriendList"),
            },
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


export default router
