<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'
</script>

<template>

<header>
      <img alt="Vue logo" class="logo" src="@/assets/fahril.jpg" width="125" height="125" />
      <div class="wrapper">
        
        
        <HelloWorld msg="FAHRIL SETYOADI" msg1="Web Developer" />
  
        <div class="head-content w-100">
            <div class="about-me">
              <h3>Tentang Saya</h3>
              <hr class="w-75">
              <h5>Saya adalah seorang pelajar dari SMK Taruna Bhakti dan juga saya merupakan web developer pemula dengan keahlian dasar. Untuk sekarang, saya sedang mempelajari laravel dan backend. Mempunyai skill public speaking yang lumayan baik, mampu bekerja dalam tim, dan selalu tertarik untuk mempelajari hal/pengetahuan baru.</h5>
            </div>
            <div class="social">
            <div class="sub-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <p>
              fahrilsetyoadi@gmail.com
            </p>
            </div>
            <div class="sub-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <p>0881-0240-29617</p>
            </div>
            <div class="sub-social">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <p>Jl. Taman Bahari II Rt09/02 No.20 Kec. Cimanggis, Kota Depok, Jawa Barat 16451</p>
            </div>
          </div>      
        </div>
        
        <div class="nav">
          <nav>
            <RouterLink to="/">Profil</RouterLink>
            <RouterLink to="/skill">Skill</RouterLink>
          </nav>
        </div>
  
      </div>

      
</header>


  <RouterView />
<footer>
  <div class="footer">
        <Footer msg="Property Of" msg1="Fahril Setyoadi" />
      </div>
</footer>
</template>

<style scoped>

/* .footer{
    width: 100vw;
    height:100vh;
    background-color: red;
} */

hr{
  height: 5px;
}
h3{
  color: #FFD369;
}

.social{
  width: 100%;
  margin-top: 10vh;
}
.sub-social{
  margin-top: 5px ;
  display: flex;  
}
.sub-social p{
  margin-left: 7px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
  margin-top: -20vh;
}

.about-me{
  margin-top: 5vh;
}

.logo {
  display: block;
  margin-bottom: 50px;
  border-radius: 12px;
  width: 30%;
  height: 30%;
}

.nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  margin-left: 12rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 12vh;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
