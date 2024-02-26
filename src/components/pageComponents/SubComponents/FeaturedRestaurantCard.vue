<script setup>

const cardContent = defineProps({
    name: String,
    location: String,
    cuisine: String,
    description: String,
    rating: Number,
    image: String,
    
})

let iterableRating = Math.floor(cardContent.rating)
let hasHalfStarRating = (cardContent.rating == iterableRating);
let starsRemaining = 5 - iterableRating;

</script>

<template>

<div class="card-body">
    <div class="card-image-container">
        <img class="card-image" :src="cardContent.image" :alt="cardContent.name">
    </div>
    <div class="title">
        <h2>{{ cardContent.name }}</h2>
        <div class="star-container">
            <img class="star" v-for="num in iterableRating" :key="num" src="@assets/images/star.png" alt="Értékelés csillag">
            <img class="star black-star" v-for="num in starsRemaining" :key="num" src="@assets/images/star.png" alt="Értékelés csillag">

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
    width: 15px;
    height: 15px;
    margin-left: 0.25rem;
    justify-content: center;
    
}
.black-star{
    filter: grayscale(1.0);
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
        font-size: 125%;
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


</style>