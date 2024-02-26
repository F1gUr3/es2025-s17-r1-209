<script setup>

</script>

<template>


<div class="blob">

</div>
<div id="hero-container">

    <div class="hero-col">
            <div class="hero-content">
                <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and ambiance. From international dishes to traditional delights and gastronomic adventures, find your perfect spot with DineEase.</p>
            <button><img src="@assets/images/Search Icon.png" alt="A magnifying glass" >Explore restaurants</button>
            </div>
    </div>

    <div class="hero-col">
        <img src="@assets/images/Hero Illustration.png" alt="A man dining feeling satisfied with his experience." >
    </div>
</div>

</template>

<style scoped>

*{
    overflow: hidden;

}

.blob{
    position: absolute;
    top: -50px;
    right: -50px;
    z-index: -1;
    width: 300px;
    height: 300px;
    background-color: #6335c7cb;
    filter: blur(100px);
    border-radius: 50%;
    overflow: hidden;


}
#hero-container{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 600px;
    color: #111827;
    overflow: hidden;
}
.hero-col{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 75%;


}
.hero-col:nth-child(1){

}

.hero-col:nth-child(2){
justify-content: flex-end;    

height: 90%;


}

.hero-col:nth-child(2)>img{
    display: flex;
    height: 90%;

}
.hero-content{
    
    width: 90%;
}
.hero-content>h1{
    align-self: flex-start;
    font-weight: 600;
    width: 110%;
    font-size: 325%;
    margin-bottom: 0px;
}
.hero-content>p{
    align-self: flex-start;
    font-size: 100%;
    margin-bottom: 2rem;
    line-height: 125%;
    font-weight: 300;
}
.hero-content button{
align-self: flex-start;
background-color: #7d48ee;
border: none;
padding: 1rem;
color: white !important;
border-radius: 10px;
font-weight: 400;
font-size: 100%;

display: flex;
align-items: center;
transition-duration: 300ms;

}
.hero-content button:hover{
    cursor: pointer;
    background-color: white;
    border: 1px solid #111827;
    color: #111827 !important;
}
.hero-content button:hover img{
    filter: invert(5%) sepia(59%) saturate(1608%) hue-rotate(200deg) brightness(84%) contrast(91%);


}
</style>