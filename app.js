exports.loadContext = function (callback) {
  var context = require.context('./pages', true)
  if (typeof document !== 'undefined') {
    var WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: ['Source Code Pro:200,400,600,800']
      },
      custom: {
        families: ['SG']
      },
      timeout: 2000
    })
  }
  if (module.hot) {
    module.hot.accept(context.id, function () {
      context = require.context('./pages', true)
      return callback(context)
    })
  }
  return callback(context)
}
