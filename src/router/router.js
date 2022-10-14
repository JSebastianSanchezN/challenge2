import {createRouter, createWebHashHistory} from 'vue-router';

const routes =[
     {path:'/', component:()=>import('../components/Challenge7.vue')},
    {path:'/challenge1', component:()=>import('../components/Challenge1.vue')},
    {path:'/challenge2', component:()=>import('../components/Challenge2.vue')},
    {path:'/challenge3', component:()=>import('../components/Challenge3.vue')},
    {path:'/challenge4', component:()=>import('../components/Challenge4.vue')},
    {path:'/challenge5', component:()=>import('../components/Challenge5.vue')},
    {path:'/challenge6', component:()=>import('../components/Challenge6.vue')},
    {path:'/login', component:()=>import('../components/Login.vue')},
    {path:'/signup', component:()=>import('../components/Signup.vue')},
    {path:'/upload', component:()=>import('../components/Upload.vue')},
    {path:'/crud', component:()=>import('../components/Crud.vue')},
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes: routes,
})

export default router;