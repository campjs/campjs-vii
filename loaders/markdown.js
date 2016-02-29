// A custom markdown loader to add to markdown

import frontMatter from 'front-matter'
import marked from 'marked'
import hljs from 'highlight.js'
import { kebabCase } from 'lodash'

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

let renderer = new marked.Renderer()

renderer.code = function (code, lang) {
  var result = [
    '<pre>',
    highlight(code, lang),
    '</pre>'
  ].join('')

  return result
}

renderer.paragraph = function (text) {
  return `<p class='Mb(r1)'>${text}</p>`
}

renderer.link = function (href, title, text) {
  return `<a href='${href}'
    ${title ? ' title="' + title + '""' : ''}
    class='Link'>${text}</a>`
}

renderer.list = function (body, ordered) {
  var type = ordered ? 'ol' : 'ul'
  return '<' + type + ' class="Mb(r1) Mstart(r1) List(s)">\n' + body + '</' + type + '>\n'
}

renderer.image = function (href, title, text) {
  var img = `<img src='${href}' alt='${text}'`
  if (title === 'mobile') {
    img = `<div class='Maw(15rem) Bdrs(r1) Bxsh(sh4) Bgc(#fff) Px(rh) Pt(rh) Pb(r1h) Mx(a) My(r1h)'>
      <div class='Bxsh(ish1)'>${img} class='D(b) Mih(12rem)' /></div></div>`
  } else if (title === 'desktop') {
    img = `<div class='Ov(h) Lh(1) Bdrs(re) Bxsh(sh4) Mx(a) My(r1h)'>
      <div class='H(0) Pt(4%) Bgc(#fff) Bxsh(sh1) Z(1)'></div>${img} class='D(b) Pos(r) Z(-1) Mih(12rem)' /></div>`
  } else if (title) {
    img = `<div class='My(r1h)'>${img} class='Mx(a) D(b) Bxsh(sh4)' title='${title}'/></div>`
  } else {
    img = `<div class='My(r1h)'>${img} class='Mx(a) D(b) Bxsh(sh4)'/></div>`
  }
  return img
}

renderer.blockquote = function (quote) {
  return '<blockquote class="Pstart(r1) Mx(0) My(r1h) Bdstart(chunky) Fz(ms1) Op(.6)">\n' + quote + '</blockquote>\n'
}

renderer.heading = function (text, level) {
  var name = kebabCase(text)
  var levelClasses
  switch (level) {
    case 1: levelClasses = 'Fz(ms3) Ff(bit) Fw(200)'; break
    case 2: levelClasses = 'Fz(ms2) Ff(bit) Fw(800)'; break
    case 3: levelClasses = 'Fz(ms2) Ff(bit) Fw(400) Op(.6)'; break
    default: levelClasses = 'Fz(ms1) Fw(600)'; break
  }
  if (level < 4) {
    return `<h${level} id="${name}" class='${levelClasses} Lh(1) Mt(r2) Mb(r1)'>
      <a href="#${name}" class='Cur(d)!'>${text}</a>
    </h${level}>`
  } else {
    return `<h${level} class='Mt(r2) Mb(r1) ${levelClasses}'>${text}</h${level}>`
  }
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const result = Object.assign({},
    meta.attributes,
    { body: marked(meta.body) }
  )
  this.value = result
  return 'module.exports = ' + JSON.stringify(result)
}
