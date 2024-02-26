<script setup>
import HeroComponent from '@components/pageComponents/HeroComponent.vue';
import Testimonials from '../components/pageComponents/Testimonials.vue';
import FeaturedRestaurants from '../components/pageComponents/FeaturedRestaurants.vue';
import SearchRestaurants from '../components/pageComponents/SearchRestaurants.vue';
import { onMounted } from 'vue';
import {useRoute} from "vue-router"



function scrollToExplore(){
    //console.log(useRoute())
    //useRoute().hash = "explore"
}

</script>

<template>
<HeroComponent @clickToScroll="scrollToExplore" />
<FeaturedRestaurants />
<Testimonials />
<SearchRestaurants  />

</template>

<style scoped>

</style>
