<template>
  <div class="lazy-video"
       v-on-visible="{onUpdate: loadSources, topOffset: '30%', bottomOffset: '30%'}">
    <div class="lazy-video-ctr"
         v-on-visible="{onUpdate, topOffset: '-35%', bottomOffset: '-30%', repeat: true}">
      <video :poster="poster"
             ref="video"
             preload="none"
             v-on:loadeddata="loaded = true"
             v-on:play="playing = true"
             v-on:pause="playing = false"
             :controls="controls"
             muted
             loop
             playsinline>
        <source v-for="(source, i) in videoSources" :src="source" :key="i" />
    </video>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LazyVideo',
  data() {
    return {
      loaded: false,
      videoSources: [],
      playing: false,
      visible: false
    }
  },
  props: {
    sources: {
      type: Array,
      required: true
    },
    poster: String,
    pauseOnExit: {
      type: Boolean,
      default: true
    },
    playOnEnter: {
      type: Boolean,
      default: true
    },
    controls: {
      default: false
    }
  },
  watch: {
    visible(visible, wasVisible) {
      console.log(this.playing)
      
      if (visible && this.playOnEnter && !this.playing) {
        this.$refs.video.play()
      }
      if (wasVisible && this.pauseOnExit && this.playing && this.loaded) {
        this.$refs.video.pause()
      }
    }
  },
  methods: {
    loadSources(item) {
      this.videoSources = this.sources
    },
    onUpdate(item) {
      this.visible = item.isVisible
    }
  }
}
</script>

