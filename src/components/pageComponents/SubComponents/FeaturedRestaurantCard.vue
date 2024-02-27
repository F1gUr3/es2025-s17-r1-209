<script setup>
import { onMounted } from 'vue';


const cardContent = defineProps({
    name: String,
    location: String,
    cuisine: String,
    description: String,
    rating: Number,
    image: String,
    
})

let iterableRating = Math.floor(cardContent.rating)
let hasHalfStarRating = (cardContent.rating != 5 && cardContent.rating == iterableRating) ? 1 : 0;
let starsRemaining = (5 - iterableRating)  - hasHalfStarRating;
</script>

<template>

<div class="card-body">
    <div class="card-image-container">
        <img class="card-image" :src="cardContent.image" :alt="cardContent.name">
    </div>
    <div class="title">
        <h2>{{ cardContent.name }}</h2>
        <div class="star-container">
            <img class="star" v-for="num in iterableRating" :key="num" src="@assets/images/star.png" alt="Review Star">
            <img class="star" v-if="hasHalfStarRating > 0" src="@assets/images/halfstar.png" alt="half Review star">
            <img class="star black-star" v-for="num in starsRemaining" :key="num" src="@assets/images/star.png" alt="Review star blacked out">

        </div>
    </div>
    <p>{{ cardContent.description }}</p>
    <RouterLink to="#">View Restaurant »</RouterLink>
</div>

</template>

<style scoped>

.card-body{
    background-color: white;
    width: 80%;
    position: relative;
    height: 400px;
    border-radius: 5px;
    margin: 1rem auto 1rem auto;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .card-image-container{
        display: flex;
        justify-content: center;

    }
    .card-image{
        width: 90%;
        padding: 1rem;
        border-radius: 20px;

    }
    p{
        font-weight: 200;
        font-size: 90%;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
    a{
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    a:any-link{
        text-decoration: none;
        color: #7d48ee;
        transition-duration: 300ms;
    }
    a:hover{
        color: #ae8cf7;
    }
}
.star{
    width: 20px;
    height: 20px;
    margin-left: 0.25rem;
    justify-content: center;
    
}
.black-star{
    filter: invert(0%) sepia(0%) saturate(7484%) hue-rotate(66deg) brightness(20%) contrast(104%);

}
.star-container{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.title{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;

    h2{
        font-weight: 500;
        font-size: 150%;
        width: 100%;

    }
    
    

}
.title:first-child{
    display: flex;
    justify-content: start !important;
}
.title:last-child{
    display: flex;
    
}

@media only screen and (max-width: 768px) {
.card-body{
height: fit-content;
width: 90%;
}
.card-image-container{
    max-height: 15rem;

}
.card-image{
    object-fit: cover;
    padding: 1rem 0rem !important;
}
a{
    position: static !important;
    margin-left: auto;
    padding: 1rem;
}
}

</style>