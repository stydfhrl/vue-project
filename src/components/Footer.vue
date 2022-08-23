<script setup>
defineProps({
msg: {
    type: String,
    required: true
},
msg1: {
    type: String,
    required: true
}
})
</script>

<template>
    <div class="footer">
        <div class="content">
            <div class="property">
                <h4>{{ msg }}</h4>
                <h3>{{ msg1 }}</h3>
            </div>
        </div>
        <div class="logo">
            <i class="fa-brands fa-linkedin fa-xl"></i>
            <i class="fa-brands fa-facebook fa-xl"></i>
            <i class="fa-brands fa-square-instagram fa-xl"></i>
            <i class="fa-brands fa-square-github fa-xl"></i>
        </div>
    </div>
</template>

<style scoped>
.footer{
    margin-top: 2rem;
}
.property{
    display: flex;
    align-items: center;
    justify-content: center;
}

h3{
    margin-left: 1rem;
    color: #FFD369;
}
.logo{
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}
i{
    width: 2rem;
    height: 3rem;
}
</style>