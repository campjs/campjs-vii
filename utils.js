export const isNotFirefox = (typeof document !== 'undefined')
  ? navigator.userAgent.indexOf('Firefox') === -1
  : true

const escapeRegex = /(<([^>]+)>)/ig

export const escapeHtml = (html) => html.replace(escapeRegex, '')
