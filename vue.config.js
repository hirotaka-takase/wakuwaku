const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: './',
  outputDir: 'docs',
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: () => {
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'docs'),
                    routes: [ '/',
                              '/dance',
                              '/idol',
                              '/outline',
                              '/participants_dance',
                              '/participants_idol',
                              '/companion',
                              '/contact',
                              '/form/store',
                              '/form/trim',
                              '/form/freemarket'
                            ]
                })
            ]
        }
    }
}