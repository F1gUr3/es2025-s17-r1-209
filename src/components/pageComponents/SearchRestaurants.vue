<script setup>

import { ref } from 'vue';
import { onMounted } from 'vue';
import FeaturedRestaurantCard from './SubComponents/FeaturedRestaurantCard.vue';

let input = ref("");

let isExpanded = ref(false);
let countOfRestaurantsShown = ref(3);

function changeVisibleRestaurants(){
    if(countOfRestaurantsShown.value == 3){
        countOfRestaurantsShown.value = restaurants.value.length;
        console.log(countOfRestaurantsShown.value);
        isExpanded.value = true;

    }
    else if(countOfRestaurantsShown.value > 3){
        countOfRestaurantsShown.value = 3;
        isExpanded.value = isExpanded.false;

    }
}

function searchInList(list){
    return list.filter((result) => result.toLowerCase().includes(input.value.toLowerCase()));
}

async function getTopRated(url){
    const fetchResult = await fetch(url).then(res => res.json());
    
    return fetchResult;

}
let restaurantPromise;
let restaurants = ref([]);

onMounted(async () => {
        const data = await getTopRated("https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants");
        restaurants.value = data; 
})

let buttonText = ref("More");

function changeButtonText() {
    if(isExpanded.value){
        buttonText.value = "Less";
    }
    else if(!isExpanded.value){
        buttonText.value = "More"
    }
    }

</script>

<template>

<div class="title">
<h2>Find Your Perfect Dining Spot</h2>
<p>Search by Cuisine, Location, or Name</p>
</div>

<div class="searchbar">
    <input type="text" v-model="input" placeholder="Search for restaurants" />
    <button class="filter"><img src="@assets/images/Filter Iconvector.svg" alt="" srcset=""> </button>
    <button class="search"><img src="@assets/images/Search Iconvector.svg" alt="" srcset=""> </button>

</div>

<div class="restaurants">
<FeaturedRestaurantCard v-for="restaurant in restaurants.slice(0,countOfRestaurantsShown)"  :name="restaurant.name" :description="restaurant.description" :rating="restaurant.rating" :image="restaurant.image" :cuisine="restaurant.cuisine" :location="restaurant.location"/>
</div>
<h4 class="expand" v-on:click="changeVisibleRestaurants(); changeButtonText();">Show {{ buttonText }} <img src="@assets/images/Chevron Down Iconvector.svg" alt=""></h4>

<div class="restaurant-container">

</div>

</template>

<style scoped>
.expand{
    text-align: center;
    font-weight: 400;
    color: #915AF0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    user-select: none;

}
.expand:hover{
    cursor: pointer;
}
.expand>img{
    display: flex;
    justify-content: center;
    filter: invert(38%) sepia(76%) saturate(1163%) hue-rotate(233deg) brightness(97%) contrast(93%);

}
.title{
    width: 100%;

    margin: 3rem auto 1rem auto;

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
.searchbar{
    display: flex;
    justify-content: center;
}
.filter{
    background-color: #e9e5e5;
    border: none;
    border-radius: 0px 5px 5px 0px;
    padding: 0.25rem;

}
.search>img{
    filter: invert(58%) sepia(76%) saturate(1163%) hue-rotate(233deg) brightness(97%) contrast(93%);
    
}
.search{
    background-color: #e9e5e5;
    border-radius: 5px;
    margin-left: 1rem;
    border: none;
    padding-left: 0.5rem;
    padding-right: 0.5rem;

}
input {
  display: block;
  width: 250px;
  padding: 1rem 60px;
  background: url("@assets/images/Search Iconvectorblack.svg") no-repeat 15px center ;
  background-size: 25px 25px;
  background-color: #e9e5e5;
  font-size: 16px;
  border: none;
  border-radius: 5px 0px 0px 5px;
  font-weight: 100;
}

input:focus, input:focus + .filter{
    border: none;
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid pink;
}

.restaurants{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
</style>