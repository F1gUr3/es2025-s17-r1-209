<script setup>
import FeaturedRestaurantCard from './SubComponents/FeaturedRestaurantCard.vue';

</script>

<template>
<div class="art-container">
    <div class="blob"></div>

<div class="featured-title">
    <h2>Featured Restaurants</h2>
    <p>Discover Unforgettable Dining Destinations</p>
</div>
    <div class="container">
    <FeaturedRestaurantCard name="Samale Bistro" cuisine="asd" description="Immerse in Eastern European authenticity at Halász Fogadö. Relish traditional dishes amid an atmosphere rich in charm and history. Join us for a timeless culinary experience." :location="asd" image="https://es2025-s17-hu-r1-backend.onrender.com/Restaurant2.png"  :rating="5"/>
    <FeaturedRestaurantCard name="asd" cuisine="asd" description="asd" :location="asd" image="https://es2025-s17-hu-r1-backend.onrender.com/Restaurant2.png"  :rating="5" />
    <FeaturedRestaurantCard name="asd" cuisine="asd" description="asd" :location="asd" image="https://es2025-s17-hu-r1-backend.onrender.com/Restaurant2.png"  :rating="5" />
    </div>
    <div class="blob"></div>

</div>


</template>

<style scoped>

.art-container{
    position: relative;
    height: 100%;
    padding-bottom: 2rem;
    overflow: hidden;
}
.blob{
    width: 250px;
    z-index: -5;
    height: 250px;
    background-color: #402fd8;
    border-radius: 50%;
    opacity: 0.25;
    position: absolute;
}
.blob:first-child{
    right: -100px;
    top: 0;
}
.blob:last-child{
    left: -100px;
    width: 400px;
    height: 400px;
    bottom: -100px;

}
.featured-title{
    width: 95%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;

    h2{
        font-size: 250%;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
    }
    p{
        font-weight: 100;
        margin-top: 0.5rem;
        margin-bottom: 0;
    }
}

.container{
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    
    
}


</style>