<template>
  <video :poster="getPoster()"
         v-on-intersect="{topOffset: loadOffset, bottomOffset: loadOffset, once: !pauseOnExit}"
         ref="video"
         preload="none"
         v-on:loadeddata="loaded = true"
         v-on:play="playing = true"
         v-on:pause="playing = false"
         v-bind="attrs">
    <source v-for="(source, i) in videoSources"
            :src="source"
            :key="i" />
  </video>
</template>

<script>
export default {
  name: 'LazyVideo',
  data() {
    return {
      isIntersecting: null,
      loaded: false,
      playing: false,
      posterLoaded: false
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
    attrs: {
      type: Object,
      required: false,
      default: function() {
        return {
          controls: true,
          playsinline: true,
          loop: false,
          autoplay: false,
          muted: false
        }
      }
    },
    loadOffset: {
      default: '50%',
      required: false,
      type: String
    },
    pauseOnExit: {
      default: true,
      required: false,
      type: Boolean
    }
  },
  computed: {
    videoSources() {
      return this.sources || [this.src]
    }
  },
  methods: {
    getPoster() {
      if (this.isIntersecting && !this.posterLoaded) {
        this.posterLoaded = true
        return this.poster
      } else if (this.posterLoaded) {
        return this.poster
      } else {
        return ''
      }

    }
  },
  watch: {
    isIntersecting(isIntersecting, wasIntersecting) {
      // when out of view pause video
      if (wasIntersecting && this.playing && this.pauseOnExit) {
        this.$refs.video.pause()
      }

      // load if video is intersecting
      if (isIntersecting && !this.loaded) {
        this.$refs.video.load()
      }
    }
  }
}
</script>

<style>
video {
  max-width: 100%;
}
</style>


