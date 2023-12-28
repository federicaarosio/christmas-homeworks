<template>
    <p class="flex counter">
        {{counter}}
    </p>
</template>
<script>
export default {
    name: "AppCounter",

    props: {
        counter: {
            type: Number,
            required: true,
        }
    }
}
</script>
<style lang="">
    
</style>