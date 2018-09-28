<template>
  <div class="lazy-video"
       v-on-visible="{onUpdate, topOffset: '30%', bottomOffset: '10%'}">
    <video :poster="poster"
           ref="video"
           preload="none"
           v-on:loadeddata="loaded = true"
           :controls="controls"
           playsinline>
      <source v-for="(source, i) in sources" :src="source" :key="i" />
    </video>
  </div>
</template>

<script>

export default {
  name: 'LazyVideo',
  data() {
    return {
      loaded: false,
      playing: false,
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
      default: true
    }
  },
  methods: {
    onUpdate(item) {
      if (item.isVisible) {
        this.$refs.video.load()
      }
    }
  }
}
</script>

