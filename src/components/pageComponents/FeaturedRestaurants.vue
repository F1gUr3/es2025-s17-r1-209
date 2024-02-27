<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import FeaturedRestaurantCard from './SubComponents/FeaturedRestaurantCard.vue';


async function getTopRated(url){
    const fetchResult = await fetch(url).then(res => res.json());
    
    return fetchResult;

}
let restaurantPromise;
let restaurants = ref([]);

onMounted(async () => {
        const data = await getTopRated("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated");
        restaurants.value = data; 
})
</script>

<template>
<div class="art-container">
    <div class="blob"></div>

<div class="featured-title">
    <h2>Featured Restaurants</h2>
    <p>Discover Unforgettable Dining Destinations</p>
</div>
    <div class="container">
    <FeaturedRestaurantCard v-for="restaurant in restaurants" :name="restaurant.name" :cuisine="restaurant.cuisine" :description="restaurant.description" :location="restaurant.location" :image="restaurant.image"  :rating="restaurant.rating"/>
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
    background-color: #EDE9FE;
    border-radius: 50%;
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

@media only screen and (max-width: 768px) {

    .container{
        grid-template-columns: repeat(1, 1fr);

    }

    .featured-title{
        width: 100%;

    margin: 1rem auto 1rem auto;

    h2{
        text-align: center;
        font-size: 250%;
        font-weight: 500;
        margin-top: 0;
        margin-bottom: 0;
    }
    p{
        text-align: center;
        font-weight: 300;
        margin-top: 0.5rem;
        margin-bottom: 0;
    }
    }
    

}

</style>