<script setup>
import TestimonialCard from './SubComponents/TestimonialCard.vue';


</script>

<template>

<div class="container">
    <div class="title">
        <div class="inner-title">
            <img src="@assets/images/Quote markvector.svg" alt="Quotation mark">
        <h2>Delightful Experiences Shared by Our Guests</h2>
        </div>
    </div>
    <div class="card-container">
            <div class="card-col">
                <TestimonialCard class="test-card desktop-view-test-card" description="Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!" reviewer="Robert & Emily"/>

            </div>
            <div class="card-col">
                <TestimonialCard class="test-card mobile-view-test-card" description="Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!" reviewer="Robert & Emily"/>
                <TestimonialCard class="test-card" description="With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced us to so much more." reviewer="Emma & Jacob"/>
                <TestimonialCard class="test-card"  description="DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform."  reviewer="Lisa & Mark"/>

            </div>
                
        
    </div>
</div>

</template>

<style scoped>

.container{
    background-color: #EDE9FE;
    width: 100%;
    height: 100%;
    min-height: 1000px;
    display: flex;
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
    width: 150px;
    height: 150px;
    z-index: -1;
}
.inner-title h2
{
        
    position: absolute;
    top: 5%;
    left: 5%;
    font-weight: 500;
    font-size: 300%;
    width: 35%;

z-index: 1;
}

.card-container{
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 75%;


}
.card-col{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.test-card:nth-child(2){
    width: 65%;
    margin-right: auto;
}

.mobile-view-test-card{
        display: none;
    }
    .desktop-view-test-card{
        display: block;
    }


@media only screen and (max-width: 768px) {

    .card-container{
        
    }
    .title{
        left: 0px;
        top: 10px;
    }
    .inner-title{
        h2{
            width: 90%;
            font-size: 250%;
            position: absolute;
            top: 75px;
        }
        img{
            left: 25px;
        }
    }
    .test-card{
        width: 100% !important;
        margin-right: auto;


        
    }

    
    .mobile-view-test-card{
        display: block;
    }
    .desktop-view-test-card{
        display: none;
    }

}

</style>