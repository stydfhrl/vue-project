

<template>
    <div class="container-profile">
        <div class="left-content">
            <div class="about-me">
                <h2>Pendidikan</h2>
                <hr class="w-75">
                <h3>SMK Taruna Bhakti</h3>
                <h5>Rekayasa Perangkat Lunak</h5>
                <p class="text-black fw-bold">2020 - 2023</p>
            </div>
            <div class="languange">
                <h2>Bahasa</h2>
                <hr class="w-75">
                <div class="languange-content">
                    <h3>Indonesia</h3>
                    <div class="bar">
                        <div class="progress w-100">
                            <div class="progress-bar bg-black bg-gradient" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
                        </div>
                        <p>100%</p>
                    </div>
                </div>
                <div class="languange-content">
                    <h3>Inggris</h3>
                    <div class="bar">
                        <div class="progress w-100">
                            <div class="progress-bar bg-black bg-gradient w-75" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" style="width: 80%;"></div>
                        </div>
                        <p>80%%</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mid-content">
            <hr>
        </div>
        <div class="right-content">
            <div class="about-me">
                <h2>Pengalaman</h2>
                <hr class="w-75">
                <ul>
                    <li>
                        <h4>Team Project Schoolzen Landing Page (Figma)</h4>
                        <h5>SMK Taruna Bhakti | 2021</h5>
                        <!-- <p class="text-black fw-bold">2020 - 2023</p> -->
                    </li>
                    <li>
                        <h4>Team Project Schoolzen Landing Page (CSS & JavaScript)</h4>
                        <h5>SMK Taruna Bhakti | 2021</h5>
                    </li>
                    <li>
                        <h4>Website Sarpras (PHP)</h4>
                        <h5>SMK Taruna Bhakti | 2021</h5>
                    </li>
                    <li>
                        <h4>Simple Landing Page (Bootstrap)</h4>
                        <h5>SMK Taruna Bhakti | 2022</h5>
                    </li>
                    <li>
                        <h4>Website Crud Agenda Guru (Laravel)</h4>
                        <h5>SMK Taruna Bhakti | 2022</h5>
                    </li>
                </ul>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<style scoped>

.mid-content{
    width: .5rem;
}
.mid-content hr{
    height: 27rem;
}
    
hr {
    height: 5px;
    color: var(--color-text-kelas);
}

h2 {
    color: var(--vt-c-black-soft-content);
}

h3 {
    color: var(--vt-c-black-soft);
}

ul{
    color: black;
}
li{
    margin-top: 30px;
}
li h4{
    color: var(--vt-c-black-soft);

}

.about-me h5 {
    margin-top: -.7rem;
    color: var(--vt-c-black-soft-sub-content);
}

.container-profile {
    background-color: white;
    width: 100vw;
    height: 100vh;
    margin-left: -5rem;
    margin-top: 5rem;
    padding: 3rem;
    display: flex;
    justify-content: space-around;
}

.languange {
    margin-top: 3rem;
}

.bar {
    display: flex;
}

.bar p {
    color: black;
    margin-left: 5px;
}
</style>