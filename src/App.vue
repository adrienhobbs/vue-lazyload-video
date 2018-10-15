<template>
  <div id="app">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="content">
            <h1 class="title is-size-1">
              Vue Lazyload Video
            </h1>
            <h2 class="subtitle"
                style="margin-top: 30px;">
              Lazy Load Videos With Ease.
            </h2>
            <p>Need a simple way to lazy load your videos? Or maybe you're looking to lazy load videos that behave like GIF's? We got you covered.</p>
            <p>How do you know this is working? Open your network tab and watch poster images and video sources get loaded as they get closer to entering the viewport.<br>All videos from <a href="http://www.coverr.co">Coverr.co</a></p>
            <div class="">
              <div class="box">
                <div class="subtitle is-size-3">Install</div>
                <pre v-highlightjs>
                <code class="javascript">import Vue from 'vue' 
import VueLazyLoadVideo from 'vue-lazyload-video'

// Register Components
// LazyVideo & LazyVideoAsGIF
Vue.use(VueLazyLoadVideo)
                  </code>
              </pre>
              </div>
              <div class="box">
                <div class="subtitle is-size-3">LazyVideo Usage</div>
                <p class="is-dark">This component lazy loads videos and their respective poster images, according to the default or user-set loadOffset.</p>
                <pre v-highlightjs>
                <code class="html">&lt;LazyVideo :sources="video.sources" :poster="video.poster" /&gt;</code>
              </pre>
                <div class="is-size-3">Props</div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        Property
                      </th>
                      <th>
                        Type
                      </th>
                      <th>
                        Example
                      </th>
                      <th>
                        Description
                      </th>
                      <th>
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>sources</th>
                      <td>Array</td>
                      <td>
                        ['videos/video1.mp4', 'videos/video1.webm']
                      </td>
                      <td>An array of video sources containing different encodings.</td>
                      <td>Required if you're not passing a src prop.</td>
                    </tr>
                    <tr>
                      <th>src</th>
                      <td>String</td>
                      <td>
                        'videos/video1.mp4'
                      </td>
                      <td>A string containing the url of the video.</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <th>poster</th>
                      <td>String</td>
                      <td>
                        'videos/video1-poster.jpg'
                      </td>
                      <td>A string containing the url to the poster image of the video.</td>
                      <td>Required if you're not passing a sources prop.</td>
                    </tr>
                    <tr>
                      <th>attrs</th>
                      <td>Object</td>
                      <td>
                        {controls: true, playsinline: true, loop: false}
                      </td>
                      <td>
                        An object with native HTML5 Attributes.
                      </td>
                      <td>
                        {controls: true, playsinline: true, loop: false, autoplay: false, muted: false}
                      </td>
                    </tr>
                    <tr>
                      <th>pauseOnExit</th>
                      <td>Boolean</td>
                      <td>
                        true
                      </td>
                      <td>Pause the video if it is playing and is scrolled outside of the viewport.</td>
                      <td>
                        true
                      </td>
                    </tr>
                    <tr>
                      <th>loadOffset</th>
                      <td>String</td>
                      <td>
                        "20%"
                      </td>
                      <td>
                        Percentage offset that will trigger your video to be loaded.
                      </td>
                      <td>
                        "20%" (Load when within 10% of entering the viewport.)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="box">
                <div class="subtitle is-size-3">LazyVideoAsGIF Usage</div>
                <p class="is-dark">This component will mimic the behavior of a looping GIF, while saving you the poor quality & large asset sizes. As with the LazyVideo component, this component will load based on a viewport offset, play and pause as it enters & exits the viewport, and loop while inside the viewport. </p>
                <pre v-highlightjs>
                <code class="html">&lt;LazyVideoAsGIF :sources="video.sources" :poster="video.poster" /&gt;</code>
              </pre>
                <div class="is-size-3">Props</div>
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        Property
                      </th>
                      <th>
                        Type
                      </th>
                      <th>
                        Example
                      </th>
                      <th>
                        Description
                      </th>
                      <th>
                        Default
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>sources</th>
                      <td>Array</td>
                      <td>
                        ['videos/video1.mp4', 'videos/video1.webm']
                      </td>
                      <td>An array of video sources containing different encodings.</td>
                      <td>Required if you're not passing a src prop.</td>
                    </tr>
                    <tr>
                      <th>src</th>
                      <td>String</td>
                      <td>
                        'videos/video1.mp4'
                      </td>
                      <td>A string containing the url of the video.</td>
                      <td>N/A</td>
                    </tr>
                    <tr>
                      <th>poster</th>
                      <td>String</td>
                      <td>
                        'videos/video1-poster.jpg'
                      </td>
                      <td>A string containing the url to the poster image of the video.</td>
                      <td>Required if you're not passing a sources prop.</td>
                    </tr>
                    <tr>
                      <th>loadOffset</th>
                      <td>String</td>
                      <td>
                        "20%"
                      </td>
                      <td>
                        Percentage offset that will trigger your video to be loaded.
                      </td>
                      <td>
                        "20%" (Load when within 10% of entering the viewport.)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="videos container">
      <div class="content hero-body">
        <h1 class="title is-size-1">
          LazyVideo Examples
        </h1>
        <div v-for="(video, key) in videos"
             :key="key">
          <LazyVideo :sources="video.sources"
                     :poster="video.poster">
          </LazyVideo>
        </div>
        <h1 class="title is-size-1">LazyVideoAsGIF Example</h1>
        <LazyVideoAsGIF src="video/Baga-Beach.mp4"
                        poster="video/Baga-Beach.jpg">
        </LazyVideoAsGIF>
      </div>
    </div>
  </div>
</template>

<script>
console.log(process.env.NODE_ENV)

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
      `video/${title}.mp4`,
      `video/${title}.webm`,
    ],
    poster: `video/${title}.jpg`
  }))
}
export default {
  name: "app",
  data() {
    return {
      videos: generateVideoData()
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cc99cc;
}

body {
  margin: 0;
  border: 20px solid #434143;
  color: #cc99cc;
  background: #2d2d2d;
}

pre,
code {
  text-align: left;
}

h1 {
  margin: 0;
  color: #cc99cc !important;
}

h2,
p {
  color: #cccccc !important;
}

video {
  max-width: 100%;
}

.videos {
  max-width: 800px;
  margin: auto;
}

.container {
  margin: auto;
  max-width: 768px;
}

p.is-dark {
  color: #4a4a4a !important;
}
</style>
