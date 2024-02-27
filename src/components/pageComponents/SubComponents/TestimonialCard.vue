<script setup>


const cardProperties = defineProps({
    description: String,
    reviewer: String
})
</script>

<template>

<div class="card-instance">
    
    <p class="description">    <img src="@assets/images/Quote markvector.svg" alt="Idézőjelek"> {{ description }}</p>
    <p class="reviewer">{{ reviewer }}</p>

</div>

</template>

<style scoped>
.card-instance{
    z-index: 1;
    background-color: white;
    position: relative;
    min-width: 300px;
    height: 100%;
    max-height: 600px;
    border-radius: 5px;
    margin: 1rem;
    display: flex;

    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 8px;    
    .description{
        width: 90%;
        line-height: 125%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2rem;
        font-weight: 300;
    }
    .reviewer{
        width: 90%;
        margin: 2rem auto 2rem  ;
        
    }
}
img{

    width: 15px;
    height: 15px;
}

@media only screen and (max-width: 768px) {
.description{
    width: 75% !important;
    
}
.reviewer{
    width: 75% !important;
}


}


</style>