<script setup>


const cardProperties = defineProps({
    description: String,
    reviewer: String
})
</script>

<template>

<div class="card-instance">
    <img src="@assets/images/Quote markvector.svg" alt="Idézőjelek">
    
    <p class="description">{{ description }}</p>
    <p class="reviewer">{{ reviewer }}</p>

</div>

</template>

<style scoped>
.card-instance{
    z-index: 10;
    background-color: white;
    width: 50%;
    position: relative;
    height: 100%;
    max-height: 600px;
    border-radius: 5px;
    margin: 1rem;
    display: flex;

    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    .description{
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
    }
    .reviewer{
        width: 70%;
        margin: 2rem auto 2rem  ;
        
    }
}
img{
    position: absolute;
    left: 5px;
    top: 5px;
    width: 50px;
    height: 50px;
}


</style>