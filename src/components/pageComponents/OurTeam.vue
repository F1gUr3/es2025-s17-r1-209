<script setup>
import { ref } from 'vue';
import Title from './Title.vue';
import Elena from '@assets/images/Person1vector.svg';
import Raj from '@assets/images/Person2vector.svg';
import Sophia from '@assets/images/Person3vector.svg';
import Lucas from '@assets/images/Person4vector.svg';
import Aisha from '@assets/images/Person5vector.svg';


let teamArray = ref([
    {
        img: Elena,
        name: "Elena Martinez",
        position: "Founder & CEO"
    },
    {
        img: Raj,
        name: "Raj Singh",
        position: "Chief Culinary Curator"
    },
    {
        img: Sophia,
        name: "Sophia Dawson",
        position: "Director of Community Engagement"
    },
    {
        img: Lucas,
        name: "Lucas Kim",
        position: "Head of Digital Strategy"
    },
    {
        img: Aisha,
        name: "Aisha Abdi",
        position: "Marketing & Brand Manager"
    }
]);


</script>

<template>
<Title title="Meet our team" sub-title="The culinary visionaries behind DineEase" />

<div class="team-container">
    <div class="person" v-for="member in teamArray">
        <img :src="member.img" :alt="member.name">
        <h2>{{member.name}}</h2>
        <p>{{member.position}}</p>
    </div>
</div>

</template>

<style scoped>

.team-container{
display: flex;
width: 75%;
margin: 2rem auto;
justify-content: center;
align-items: center;
flex-wrap: wrap;

}

.person{
    text-align: center;
    display: flex;
    flex-direction: column;
    flex-basis: calc(100% / 3);
    width: calc(100% / 3);

}
.person>img{
    width: 25%;
    margin: auto;
}

</style>