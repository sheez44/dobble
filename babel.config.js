module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  }
}
