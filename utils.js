export const isNotFirefox = (typeof document !== 'undefined')
  ? navigator.userAgent.indexOf('Firefox') === -1
  : true
