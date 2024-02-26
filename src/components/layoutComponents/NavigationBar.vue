<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let isHamburgerActive = ref(false);


</script>

<template>
<nav id="navigation-bar">
        <ul id="navigation-links">
            <li><img src="@assets/images/Logo.png" alt="DineEase colorful logo" ></li>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about-us">About Us</RouterLink></li>
            <li><RouterLink to="/contact-us">Contact</RouterLink></li>
            <li id="hamburger-menu" v-on:click="isHamburgerActive = !isHamburgerActive">
                <div v-bind:class="{'bar': true, 'bar-active': isHamburgerActive}"></div>
                <div v-bind:class="{'bar': true, 'bar-active': isHamburgerActive}"></div>
                <div v-bind:class="{'bar': true, 'bar-active': isHamburgerActive}"></div>
            </li>
        </ul>
        
    </nav>
    <nav :class="{'hamburger-nav': true, 'hamburger-nav-active': isHamburgerActive}">
        <ul class="hamburger-navigation-links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about-us">About Us</RouterLink></li>
            <li><RouterLink to="/contact-us">Contact</RouterLink></li>
        </ul>
    </nav>
</template>

<style scoped>





#navigation-bar{
    display: flex;
    position: relative;
    #navigation-links{
        display: flex;
        flex-direction: row;
        list-style: none;
        width: 100%;

    }
    #navigation-links li a:visited, #navigation-links li a:any-link{
        color: black !important;
        text-decoration: none;
        transition-duration: 300ms;

    }
    #navigation-links li{
        margin: auto 0.5rem; 
        
    }
    #navigation-links li a:hover{
        color: palevioletred !important;
    }


}

.hamburger-nav{
        display: none !important;
    }


@media only screen and (max-width: 768px) {
    #navigation-links li:first-child{
        display: inherit !important;
        
    }
    #navigation-links li:last-child{
        display: flex !important;
        flex-direction: column; 
        width: 100%;
        align-items: end;
    }
    #navigation-links li{
        display: none;
        
    }
    .bar{
        display: flex;
        width: 25px;
        height: 2.5px;
        border-radius: 25px;
        margin: 2px 0px;
        background-color: #1f1f1f !important;
        transition-duration: 300ms;
    }

        .bar-active:nth-child(1){
            transform: rotate(45deg) translateY(350%) !important;
        }
        .bar-active:nth-child(2) {
            opacity: 0;
          }
        
          .bar-active:nth-child(3) {
            transform: rotate(-45deg) translateY(-375%) !important;
          }


          .hamburger-nav{
            display: block !important;
            position: absolute ;
            top: 100px;
            left: -200%;
            width: 100%;
            height: auto !important;
            transition-duration: 300ms;
            background-color: rgba(255, 255, 255, 0.142);
            backdrop-filter: blur(10px);
          }
          .hamburger-nav-active{
            display: block !important;
            position: absolute ;
            top: 100px;
            left: 50%;
            
            transform: translateX(-50%);
        }
          .hamburger-navigation-links, .hamburger-navigation-links li {

            background-color: #00000000;
            list-style: none;
            -webkit-backdrop-filter: blur(10px);
        }
        
        .hamburger-navigation-links li a:any-link{
            color: initial;
            background-color: inherit;
            text-decoration: none;
            transition-duration: 300ms;
            margin: 1rem;

        }
        .hamburger-navigation-links li{
            margin-bottom: 1rem;
            text-align: center;
        }
        .hamburger-navigation-links li a:hover{
            color: palevioletred !important;

        }

        

}








</style>