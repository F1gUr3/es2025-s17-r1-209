<script setup>

</script>

<template>

<div class="banner-container">
    <h2>Connect with DineEase</h2>
    <p>Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story, we're eager to hear from you. Dive deeper into the DineEase experience and let's make every meal memorable.</p>
    <RouterLink to="/contact-us">Connect With DineEase</RouterLink>
</div>

</template>

<style scoped>

.banner-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 600px;
    background-color: #7C3AED;
    text-align: center;
    color: white;
    h2{
        font-size: 300%;
        margin-bottom: 2rem;
    }
    p{
        font-size: 125%;
        width: 60%;
        margin: 1rem auto;
        font-weight: 300;
    }

a:any-link{
    color: #7C3AED;
    text-decoration: none;
    padding: 1rem;
    border-radius: 10px;
    background-color: white;
    transition-duration: 300ms;
    margin-top: 2rem;
}
a:hover{
    background-color: #7C3AED;
    border: 1px white solid;
    color: white;
}

}
@media only screen and (max-width: 768px) {
    p{
        width: 90% !important;
    }
}
</style>