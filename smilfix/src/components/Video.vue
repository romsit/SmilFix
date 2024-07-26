<script setup>
const props = defineProps({
    video: {
        type: Object,
        required: true
    }

})
const emit = defineEmits(['close-video'])
const ytUrl = 'https://www.youtube.com/embed/'

</script>

<template>
    <div class="modal">
        <div class="modal-video-container">
            <div class="close-modal text-white"><button @click="$emit('close-video')">X</button></div>
            <iframe class="video-popup" :src="ytUrl + video.url" width="690" height="388" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    transition: all 0.1s;
    background: rgba(0, 0, 0, 0.85);
}

.modal-video-container {
    position: absolute;
    top: 28%;
    left: 35%;
    transform: scale(1);
    transition: all 0.1s
}

.video-popup {
    position: absolute;
    top: 2em;
}

.close-modal {
    position: absolute;
    top: 0;
    left: 42em;
}
</style>