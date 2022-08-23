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
  <div class="greetings">
    <div class="flex">
      <h1 class="green">{{ msg }}</h1>
      <h1 class="kelas">{{ msg1 }}</h1>
    </div>
    <hr>
  </div>
</template>

<style scoped>

hr{
  height: 15px;
  width: 100%;
}

h1 {
  font-weight: 700;
  font-size: 2.6rem;
  top: -10px;
  letter-spacing: .3rem;
  word-spacing: .2rem;
}

h1.kelas{
  font-size: 2rem;
  font-weight: 600;
  margin: auto;
  letter-spacing: .2rem;
  color: var(--color-text-kelas);
}

h3 {
  margin-top: 2rem;
  font-size: 1.2rem;
  color: var(--color-text-profil-skill);
}

/* .flex{
  display: flex;
} */

.greetings h1,
.greetings h3 {
  text-align: center;
}
.greetings{
  width: 100%;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
