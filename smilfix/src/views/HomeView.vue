<script setup>
import { ref, onMounted, reactive } from 'vue'
import Video from '../components/Video.vue'
import APIService from '../services/APIService'

const videos = ref([])
const video = ref([])
const modal = reactive({
    mostrar: false
})
const filteredVideos = ref([])

onMounted(async function () {
    videos.value = await APIService.getAll()
})
const openVideo = (vid) => {
    modal.mostrar = true,
        video.value = vid
}
const close = () => {
    modal.mostrar = false
}
const filterVideos = (cat) => {
    filteredVideos.value = videos.value.filter((video) => video.category === cat)
}
</script>

<template>
    <div class="m-8">
        <h1 class="text-center text-2xl">Categorías</h1>
        <div class="flex flex-wrap justify-between px-10 py-10 text-lg text-center">
            <button class="text-blue-600 underline" @click="filterVideos('canciones')">Canciones</button>
            <button class="text-blue-600 underline" @click="filterVideos('matematicas')">Matemáticas</button>
            <button class="text-blue-600 underline" @click="filterVideos('animales')">Animales</button>
            <button class="text-blue-600 underline" @click="filterVideos('fonetica')">Fonética</button>
        </div>
        <ul>
            <li v-for="video in filteredVideos" :video="video" :key="video.id"> 
                <button @click="openVideo(video)" class="text-sm lg:text-lg"> • {{ video.name }}</button> 
            </li>
            <Video v-if="modal.mostrar" :video="video" @close-video="close" />
        </ul>

    </div>
</template>