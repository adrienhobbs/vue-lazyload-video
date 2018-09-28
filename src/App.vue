<template>
  <div id="app">
    <div class="container">
      WELCOME TO VUE LAZY LOAD
    </div>
    <div class="videos">
      <div v-for="(video, key) in videos"
           :key="key">
        <LazyVideo :sources="video.sources"
                   :poster="video.poster">
        </LazyVideo>
      </div>
    </div>
  </div>
</template>

<script>
import LazyVideo from "./components/LazyVideo.vue";

function generateVideoData() {
  const titles = [
    "Baga-Beach",
    "Beetle-Nut-Trees",
    "Candolim-Beach",
    "Fishermans-Village",
    "Indian-Tea",
    "Jeep-trip",
    "Pool-games",
    "The-Hill",
    "The-Pelicans"
  ]

  return titles.map(title => ({
    sources: [
      `/video/${title}.mp4`,
      `/video/${title}.webm`,
    ],
    poster: `/video/${title}.jpg`
  }))
}
export default {
  name: "app",
  data() {
    return {
      videos: generateVideoData()
    };
  },
  components: {
    LazyVideo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: #2c3e50;
}

video {
  max-width: 100%;
}

.videos {
  max-width: 800px;
  margin: auto;
}

.container {
  height: 90vh;
  width: 100%;
  background: #2c3e50;
  color: white;
  font-size: 3em;
}
</style>
