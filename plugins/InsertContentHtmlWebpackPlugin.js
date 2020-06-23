const HtmlWebpackPlugin = require('safe-require')('html-webpack-plugin')

class InsertContentHtmlWebpackPlugin {
  constructor(options){
    this.options = options
  }

  apply (compiler) {
    const _this = this;

    compiler.hooks.compilation.tap('InsertContentHtmlWebpackPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTags.tapAsync('InsertContentHtmlWebpackPlugin', (data, cb) => {
        // console.log('alterAssetTags: ', data)
        data.assetTags.styles.push({
          tagName: 'css',
          voidTag: false,
          attributes: {
            rel: 'stylesheet',
            href: 'test.css'
          }
        })
        cb(null, data)
      })

      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync('InsertContentHtmlWebpackPlugin', (data, cb) => {
        // console.log('alterAssetTagGroups: ', data)
        // data.headTags.push({
        //   tagName: 'style',
        //   innerHTML: `
        //     body {
        //       background-color: red;
        //     }
        //   `
        // })
        cb(null, data)
      })

      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('InsertContentHtmlWebpackPlugin', (data, cb) => {
        // console.log('beforeEmit: ', data, compilation)
        data.html = _this.options.content + data.html
        cb(null, data)
      })
    })
  }
}

module.exports = InsertContentHtmlWebpackPlugin