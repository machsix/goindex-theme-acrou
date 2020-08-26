
var scripts = [
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/app.a6d84bbd.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-075e2f32.5f6412ee.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-19cca5cc.38c7df84.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-2d0af48a.2a7f864b.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-2d0b2ee4.952dedde.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-4b66a741.b189fee6.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-5b360fb2.678b159c.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-65fb5a20.f3b99fed.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-67798dae.10fd57d1.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-8d6a0ba0.2683be05.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-a35b94a2.38b71915.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-bfd1bba6.1f3ac535.js",
  "https://cdn.jsdelivr.net/gh/machsix/goindex-theme-acrou@2.0.8/dist/js/chunk-vendors.03a1f604.js",
];

var cdnjs = [
  "https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js",
  "https://cdn.jsdelivr.net/npm/vue-i18n@8.17.3/dist/vue-i18n.min.js",
  "https://cdn.jsdelivr.net/npm/vue-router@3.1.6/dist/vue-router.min.js",
  "https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.js",
  "https://cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js",
  "https://cdn.jsdelivr.net/npm/element-ui@2.13.1/lib/index.js",
  "https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js",
  "https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/low.min.js",
  "https://cdn.jsdelivr.net/npm/lowdb@1.0.0/dist/LocalStorage.min.js",
  "https://cdn.jsdelivr.net/npm/markdown-it@10.0.0/dist/markdown-it.min.js",
  "https://at.alicdn.com/t/font_1760192_axq33n6snd.js",
]

cdnjs.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});

scripts.forEach((item) => {
  document.write('<script src="' + item + '"></script>');
});
