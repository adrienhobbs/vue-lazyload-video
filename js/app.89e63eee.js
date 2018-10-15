(function(e){function t(t){for(var i,r,a=t[0],d=t[1],l=t[2],u=0,v=[];u<a.length;u++)r=a[u],n[r]&&v.push(n[r][0]),n[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);c&&c(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],i=!0,a=1;a<o.length;a++){var d=o[a];0!==n[d]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=o[0]))}return e}var i={},n={app:0},s=[];function r(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=i,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(o,i,function(t){return e[t]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-lazyload-video/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=d;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var i=o("31c5"),n=o.n(i);n.a},"31c5":function(e,t,o){var i=o("5fc7");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=o("499e").default;n("f155f63c",i,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(e,t,o){"use strict";o.r(t);var i={};o.r(i),o.d(i,"default",function(){return m}),o.d(i,"LazyVideo",function(){return L}),o.d(i,"LazyVideoAsGIF",function(){return I});o("cadf"),o("551c"),o("097d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"container"},[o("section",{staticClass:"hero"},[o("div",{staticClass:"hero-body"},[o("div",{staticClass:"content"},[o("h1",{staticClass:"title is-size-1"},[e._v("\n              Vue Lazyload Video\n            ")]),o("h2",{staticClass:"subtitle",staticStyle:{"margin-top":"30px"}},[e._v("\n              Lazy Load Videos With Ease.\n            ")]),o("p",[e._v("Need a simple way to lazy load your videos? Or maybe you're looking to lazy load videos that behave like GIF's? We got you covered.")]),e._m(0),o("div",{},[o("div",{staticClass:"box"},[o("div",{staticClass:"subtitle is-size-3"},[e._v("Install")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("                "),o("code",{staticClass:"javascript"},[e._v("import Vue from 'vue' \nimport VueLazyLoadVideo from 'vue-lazyload-video'\n\n// Register Components\n// LazyVideo & LazyVideoAsGIF\nVue.use(VueLazyLoadVideo)\n                  ")]),e._v("\n              ")])]),o("div",{staticClass:"box"},[o("div",{staticClass:"subtitle is-size-3"},[e._v("LazyVideo Usage")]),o("p",{staticClass:"is-dark"},[e._v("This component lazy loads videos and their respective poster images, according to the default or user-set loadOffset.")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v('//For videos with multiple sources use an array of sources and the "sources" prop\n                '),o("code",{staticClass:"html"},[e._v("<LazyVideo :sources=\"['videos/video1.mp4', 'videos/video1.webm']\" :poster=\"video.poster\" />")]),e._v('\n// For videos with a single source use the "src" prop \n                '),o("code",{staticClass:"html"},[e._v('<LazyVideo :src="videos/video1.mp4" :poster="video.poster" />')]),e._v("\n              ")]),o("div",{staticClass:"is-size-3"},[e._v("Props")]),e._m(1)]),o("div",{staticClass:"box"},[o("div",{staticClass:"subtitle is-size-3"},[e._v("LazyVideoAsGIF Usage")]),o("p",{staticClass:"is-dark"},[e._v("This component will mimic the behavior of a looping GIF, while saving you the poor quality & large asset sizes. As with the LazyVideo component, this component will load based on a viewport offset, play and pause as it enters & exits the viewport, and loop while inside the viewport. ")]),o("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}]},[e._v("                "),o("code",{staticClass:"html"},[e._v('<LazyVideoAsGIF :sources="video.sources" :poster="video.poster" />')]),e._v("\n              ")]),o("div",{staticClass:"is-size-3"},[e._v("Props")]),e._m(2)])])])])])]),o("div",{staticClass:"videos container"},[o("div",{staticClass:"content hero-body"},[o("h1",{staticClass:"title is-size-1"},[e._v("\n          LazyVideo Examples\n        ")]),e._l(e.videos,function(e,t){return o("div",{key:t},[o("LazyVideo",{attrs:{sources:e.sources,poster:e.poster}})],1)}),o("h1",{staticClass:"title is-size-1"},[e._v("LazyVideoAsGIF Example")]),o("LazyVideoAsGIF",{attrs:{src:"video/Baga-Beach.mp4",poster:"video/Baga-Beach.jpg"}})],2)])])},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("How do you know this is working? Open your network tab and watch poster images and video sources get loaded as they get closer to entering the viewport."),o("br"),e._v("All videos from "),o("a",{attrs:{href:"http://www.coverr.co"}},[e._v("Coverr.co")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[e._v("\n                        Property\n                      ")]),o("th",[e._v("\n                        Type\n                      ")]),o("th",[e._v("\n                        Example\n                      ")]),o("th",[e._v("\n                        Description\n                      ")]),o("th",[e._v("\n                        Default\n                      ")])])]),o("tbody",[o("tr",[o("th",[e._v("sources")]),o("td",[e._v("Array")]),o("td",[e._v("\n                        ['videos/video1.mp4', 'videos/video1.webm']\n                      ")]),o("td",[e._v("An array of video sources containing different encodings.")]),o("td",[e._v("Required if you're not passing a src prop.")])]),o("tr",[o("th",[e._v("src")]),o("td",[e._v("String")]),o("td",[e._v("\n                        'videos/video1.mp4'\n                      ")]),o("td",[e._v("A string containing the url of the video.")]),o("td",[e._v("N/A")])]),o("tr",[o("th",[e._v("poster")]),o("td",[e._v("String")]),o("td",[e._v("\n                        'videos/video1-poster.jpg'\n                      ")]),o("td",[e._v("A string containing the url to the poster image of the video.")]),o("td",[e._v("Required if you're not passing a sources prop.")])]),o("tr",[o("th",[e._v("attrs")]),o("td",[e._v("Object")]),o("td",[e._v("\n                        {controls: true, playsinline: true, loop: false}\n                      ")]),o("td",[e._v("\n                        An object with native HTML5 Attributes.\n                      ")]),o("td",[e._v("\n                        {controls: true, playsinline: true, loop: false, autoplay: false, muted: false}\n                      ")])]),o("tr",[o("th",[e._v("pauseOnExit")]),o("td",[e._v("Boolean")]),o("td",[e._v("\n                        true\n                      ")]),o("td",[e._v("Pause the video if it is playing and is scrolled outside of the viewport.")]),o("td",[e._v("\n                        true\n                      ")])]),o("tr",[o("th",[e._v("loadOffset")]),o("td",[e._v("String")]),o("td",[e._v('\n                        "50%"\n                      ')]),o("td",[e._v("\n                        Percentage offset that will trigger your video to be loaded.\n                      ")]),o("td",[e._v('\n                        "20%" (Load when within 20% of entering the viewport.)\n                      ')])])])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("table",{staticClass:"table"},[o("thead",[o("tr",[o("th",[e._v("\n                        Property\n                      ")]),o("th",[e._v("\n                        Type\n                      ")]),o("th",[e._v("\n                        Example\n                      ")]),o("th",[e._v("\n                        Description\n                      ")]),o("th",[e._v("\n                        Default\n                      ")])])]),o("tbody",[o("tr",[o("th",[e._v("sources")]),o("td",[e._v("Array")]),o("td",[e._v("\n                        ['videos/video1.mp4', 'videos/video1.webm']\n                      ")]),o("td",[e._v("An array of video sources containing different encodings.")]),o("td",[e._v("Required if you're not passing a src prop.")])]),o("tr",[o("th",[e._v("src")]),o("td",[e._v("String")]),o("td",[e._v("\n                        'videos/video1.mp4'\n                      ")]),o("td",[e._v("A string containing the url of the video.")]),o("td",[e._v("N/A")])]),o("tr",[o("th",[e._v("poster")]),o("td",[e._v("String")]),o("td",[e._v("\n                        'videos/video1-poster.jpg'\n                      ")]),o("td",[e._v("A string containing the url to the poster image of the video.")]),o("td",[e._v("Required if you're not passing a sources prop.")])]),o("tr",[o("th",[e._v("loadOffset")]),o("td",[e._v("String")]),o("td",[e._v('\n                        "50%"\n                      ')]),o("td",[e._v("\n                        Percentage offset that will trigger your video to be loaded.\n                      ")]),o("td",[e._v('\n                        "20%" (Load when within 20% of entering the viewport.)\n                      ')])])])])}];function a(){var e=["Baga-Beach","Beetle-Nut-Trees","Candolim-Beach","Fishermans-Village","Indian-Tea","Jeep-trip","Pool-games","The-Hill","The-Pelicans"];return e.map(function(e){return{sources:["video/".concat(e,".mp4"),"video/".concat(e,".webm")],poster:"video/".concat(e,".jpg")}})}console.log("production");var d={name:"app",data:function(){return{videos:a()}}},l=d,c=(o("034f"),o("2877")),u=Object(c["a"])(l,s,r,!1,null,null,null);u.options.__file="App.vue";var v=u.exports,p=o("998c"),f=o.n(p),h=(o("eb46"),o("803b"),o("456d"),o("ac6a"),o("5020")),g=o.n(h),_=o("bdce"),y=o.n(_),m={install:function(){n["default"].use(g.a),n["default"].use(y.a),Object.keys(i).filter(function(e){return"default"!==e}).forEach(function(e){n["default"].component(e,i[e])})}},b=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"on-intersect",rawName:"v-on-intersect",value:{topOffset:e.loadOffset,bottomOffset:e.loadOffset,once:!e.pauseOnExit},expression:"{topOffset: loadOffset, bottomOffset: loadOffset, once: !pauseOnExit}"}],staticClass:"lazy-video"},[o("video",e._b({ref:"video",attrs:{poster:e.getPoster(),preload:"none"},on:{loadeddata:function(t){e.loaded=!0},play:function(t){e.playing=!0},pause:function(t){e.playing=!1}}},"video",e.attrs,!1),e._l(e.videoSources,function(e,t){return o("source",{key:t,attrs:{src:e}})}))])},w=[],O={name:"LazyVideo",data:function(){return{isIntersecting:null,loaded:!1,playing:!1,posterLoaded:!1}},props:{poster:String,src:{type:String,required:!1},sources:{type:Array,required:!1},attrs:{type:Object,required:!1,default:function(){return{controls:!0,playsinline:!0,loop:!1,autoplay:!1,muted:!1}}},loadOffset:{default:"50%",required:!1,type:String},pauseOnExit:{default:!0,required:!1,type:Boolean}},computed:{videoSources:function(){return this.sources||[this.src]}},methods:{getPoster:function(){return this.isIntersecting&&!this.posterLoaded?(this.posterLoaded=!0,this.poster):this.posterLoaded?this.poster:""}},watch:{isIntersecting:function(e,t){t&&this.playing&&this.pauseOnExit&&this.$refs.video.pause(),e&&!this.loaded&&this.$refs.video.load()}}},z=O,x=Object(c["a"])(z,b,w,!1,null,null,null);x.options.__file="LazyVideo.vue";var L=x.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"on-intersect",rawName:"v-on-intersect",value:{topOffset:e.loadOffset,bottomOffset:e.loadOffset},expression:"{topOffset: loadOffset, bottomOffset: loadOffset}"}],staticClass:"lazy-video"},[o("video",{directives:[{name:"sync-location",rawName:"v-sync-location"}],ref:"video",attrs:{poster:e.posterSource,preload:"none",autoplay:"",playsinline:"",loop:"",muted:""},domProps:{muted:!0},on:{loadeddata:function(t){e.loaded=!0},play:function(t){e.playing=!0},pause:function(t){e.playing=!1}}},e._l(e.videoSources,function(e,t){return o("source",{key:t,attrs:{src:e}})}))])},V=[],A={name:"LazyVideoAsGIF",data:function(){return{isVisible:null,isIntersecting:null,loaded:!1,playing:!1}},props:{poster:String,src:{type:String,required:!1},sources:{type:Array,required:!1},loadOffset:{default:"50%",required:!1,type:String}},computed:{videoSources:function(){return this.sources||[this.src]},posterSource:function(){return this.isIntersecting?this.poster:""}},watch:{loaded:function(e){e&&this.isVisible},isVisible:function(e,t){t&&this.playing?this.$refs.video.pause():e&&!this.playing&&this.loaded&&this.$refs.video.play()},isIntersecting:function(e,t){e&&!this.loaded&&this.$refs.video.load()}}},j=A,S=Object(c["a"])(j,C,V,!1,null,null,null);S.options.__file="LazyVideoAsGIF.vue";var I=S.exports;n["default"].use(m),n["default"].use(f.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(v)}}).$mount("#app")},"5fc7":function(e,t,o){t=e.exports=o("2350")(!1),t.push([e.i,"\n#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center\n}\n#app,body{color:#c9c\n}\nbody{margin:0;border:20px solid #434143;background:#2d2d2d\n}\ncode,pre{text-align:left\n}\nh1{margin:0;color:#c9c!important\n}\nh2,p{color:#ccc!important\n}\nvideo{max-width:100%\n}\n.videos{max-width:800px;margin:auto\n}\n.container{margin:auto;max-width:768px\n}\np.is-dark{color:#4a4a4a!important\n}",""])}});
//# sourceMappingURL=app.89e63eee.js.map