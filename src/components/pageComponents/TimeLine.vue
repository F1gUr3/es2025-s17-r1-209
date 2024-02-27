<script setup>
import Title from './Title.vue';
</script>

<template>

<Title title="About us" sub-title="Embracing the joy of Dining" />


<div class="timeline-container">
<ol class="timeline">
    <li class="entry">
        <div class="blob"></div>
    </li>
       <li class="entry">
        <div class="blob"></div>

    </li>
        <li class="entry">
        <div class="blob"></div>
        </li>
        <li class="entry">
        <div class="blob"></div>

    </li>
        <li class="entry">
        <div class="blob"></div>
    </li>

</ol>
</div>



</template>

<style scoped>



.timeline-container{
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 3rem;
margin-top: 3rem;

}
.timeline{
    display: flex;
    flex-direction: row;
    width: 60%;
    position: relative
}
.timeline::after{
    content: "";
    position: absolute;
    left: 0;
    width: calc(100% - 10%);
    height: 2px;
    background-color: #7C3AED;
    top: 50%;
    transform: translateY(-50%);
    left: 50%;
    transform: translateX(-50%);

}
.timeline li{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    width: 100%;
}
.entry{
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    padding: 3rem;
    width: 100%;
    
}
.blob{
    width: 12.5px;
    height: 12.5px;
    background-color: #7C3AED;
    
    border-radius: 50%;
    border: 3.5px solid white;
    box-shadow: 0px 0px 0px 2.5px #7C3AED;
    color: #7C3AED;
    font-weight: 600;
    text-align: center;
}
.blob::after{
    font-weight: 300;
    font-size: 75%;
}
.blob::before{
    font-size: 115%;
}

.entry:nth-child(1) .blob::before{
    content: "2019";
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(1) .blob::after{
    color: black;
    content: "Birth of DineEase";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

}

.entry:nth-child(2) .blob::before{
    content: "2020";
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(2) .blob::after{
    color: black;
    content: "Culinary connections made";
    position: absolute;
    
    top: 0px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(3) .blob::before{
    content: "2021";
    position: absolute;

    top: 20px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(3) .blob::after{
    color: black;
    content: "Curatorial Excellence Emerges";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

}


.entry:nth-child(4) .blob::before{
    content: "2022";
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(4) .blob::after{
    color: black;
    content: "Redefining Dining Landscape";
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(5) .blob::before{

    content: "2023";
    position: absolute;

    top: 20px;
    left: 50%;
    transform: translateX(-50%);

}
.entry:nth-child(5) .blob::after{
    color: black;
    content: "Redefining Dining Landscape";
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

}
@media only screen and (max-width: 768px) {
.timeline{
    width: 100%;
}
.timeline::after{
    width: 100%;
}

}


</style>