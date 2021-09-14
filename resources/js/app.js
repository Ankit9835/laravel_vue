/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 //window.Vue = require('vue');
 
 import Vue from 'vue'
 import VueRouter from 'vue-router'
 import {routes} from './routes'
 
 Vue.use(VueRouter)
 
 //Vue.component('example-component', require('./components/ExampleComponent.vue').default);
 
 const router = new VueRouter({
    routes,
    mode: 'history'
  })
 
 const app = new Vue({
     el: '#app',
     router
 });
 