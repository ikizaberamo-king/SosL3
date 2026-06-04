import{createRouter,createWebHistory}from"vue-router";
import Home from"../views/home.vue";
import About from"../views/about.vue";
import Contact from"../views/contact.vue";
import Services from "@/views/services.vue";
import Photos from "../views/photos.vue";
import Videos from "../views/videos.vue";
import Northern from "../views/northern.vue";
import Eastern from "../views/Eastern.vue";
import Kigali from "../views/Kigali.vue";
import Western from "../views/Western.vue";
import Southern from "../views/Southern.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";


const routes=[
    {path:"/",name:"Home",component:Home},
    {path:"/about",name:"About",component:About},
    {path:"/contact",name:"Contact",component:Contact},
    {path:"/services",name:"services",component:Services},
    {path:"/gallery",redirect:"/gallery/photos"},
    {path:"/gallery/photos",name:"Photos",component:Photos},
    {path:"/gallery/videos",name:"Videos",component:Videos},
    {path:"/northern",name:"Northern",component:Northern},
    {path:"/eastern",name:"Eastern",component:Eastern},
    {path:"/kigali",name:"Kigali",component:Kigali},
    {path:"/western",name:"Western",component:Western},
    {path:"/southern",name:"Southern",component:Southern},
    {path:"/login",name:"Login",component:Login},
    {path:"/register",name:"Register",component:Register},
];
    const router=createRouter({history:createWebHistory(),routes});
    export default router;