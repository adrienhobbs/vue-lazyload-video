<template>
  <div class="lazy-video"
       v-on-intersect="{topOffset: loadOffset, bottomOffset: loadOffset}">
    <video v-sync-location
           :poster="posterSource"
           ref="video"
           preload="none"
           v-on:loadeddata="loaded = true"
           v-on:play="playing = true"
           v-on:pause="playing = false"
           autoplay
           playsinline
           loop
           muted>
      <source v-for="(source, i) in videoSources"
              :src="source"
              :key="i" />
    </video>
  </div>
</template>

<script>
export default {
  name: 'LazyVideoAsGIF',
  data() {
    return {
      isVisible: null,
      isIntersecting: null,
      loaded: false,
      playing: false
    }
  },
  props: {
    poster: String,
    src: {
      type: String,
      required: false
    },
    sources: {
      type: Array,
      required: false
    },
    loadOffset: {
      default: '50%',
      required: false,
      type: String
    },
  },
  computed: {
    videoSources() {
      return this.sources || [this.src]
    },
    posterSource() {
      return this.isIntersecting ? this.poster : ''
    }
  },
  watch: {
    loaded(isLoaded) {
      if (isLoaded && this.isVisible) {
        // this.$refs.video.play()
      }
    },
    isVisible(isVisible, wasVisible) {
      // when out of view pause video
      if (wasVisible && this.playing) {
        this.$refs.video.pause()
      } else if (isVisible && !this.playing && this.loaded) {
        this.$refs.video.play()
      }

    },
    isIntersecting(isIntersecting, wasIntersecting) {
      // load if video is intersecting
      if (isIntersecting && !this.loaded) {
        this.$refs.video.load()
      }
    }
  }
}
</script>

