import{createRouter,createWebHistory}from"vue-router";
import Home from"../views/home .vue";
import About from"../views/about.vue";
import Contact from"../views/contact.vue";
import Services from "@/views/services.vue";


const routes=[{path:"/",name:"Home",component:Home},
    {path:"/about",name:"About",component:About},
    {path:"/contact",name:"Contact",component:Contact},
    {path:"/services",name:"services",component:Services},];
    const router=createRouter({history:createWebHistory(),routes});
    export default router;