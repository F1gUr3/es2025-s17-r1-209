<script setup>
import TestimonialCard from './SubComponents/TestimonialCard.vue';


</script>

<template>

<div class="container">
    <div class="title">
        <div class="inner-title">
            <img src="@assets/images/Quote markvector.svg" alt="">
        <h2>Delightful Experiences Shared by Our Guests</h2>
        </div>
    </div>
    <div class="card-container">
                <TestimonialCard class="test-card" description="Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!" reviewer="Robert & Emily"/>
                <TestimonialCard class="test-card" description="DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform." reviewer="Emma Jacobs"/>
                <TestimonialCard class="test-card" description="With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more." reviewer="Lisa & Mark"/>

        
    </div>
</div>

</template>

<style scoped>

.container{
    background-color: #EDE9FE;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: -2;
}
.title
{
    position: absolute;
    left: 5%;
    top: 10%;
    width: 100%;
    height: 100%;

}
.inner-title{
    position: relative;
    width: 100%;
    height: 100%;
}
.inner-title img
{   
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    z-index: -1;
}
.inner-title h2
{
        
    position: absolute;
    top: 5%;
    left: 5%;
    font-weight: 400;
    font-size: 300%;
    width: 35%;

z-index: 1;
}

.card-container{
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}



</style>