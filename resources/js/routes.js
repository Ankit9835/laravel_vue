let login = require('./components/auth/login.vue').default;
let register = require('./components/auth/register.vue').default;
let forget = require('./components/auth/forget.vue').default;
let home = require('./components/home.vue').default;
let logout = require('./components/auth/logout.vue').default;

// category component
let storecategory = require('./components/category/create.vue').default;
let category = require('./components/category/index.vue').default;
let editcategory = require('./components/category/edit.vue').default;



export const routes = [
    {path: '/', component: login, name: '/'},
    { path: '/register', component: register, name: 'register'},
    { path: '/forget', component: forget, name: 'forget'},
    { path: '/home', component: home, name: 'home'},
    { path: '/logout', component: logout, name: 'logout'},

    // category module
    {path: '/store-category', component: storecategory, name: 'store-category'},
    {path: '/category', component: category, name: 'category'},
    {path: '/edit-category/:id', component: editcategory, name: 'edit-category'},
  ]