<script setup>

let titleProps = defineProps({
    title: String,
    subTitle: String
})

</script>

<template>
<div class="title" id="explore">
<h2>{{ titleProps.title }}</h2>
<p>{{ titleProps.subTitle }}</p>
</div>


</template>

<style scoped >
.title{
    width: 100%;

    margin: 0rem auto 1rem auto;

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




</style>