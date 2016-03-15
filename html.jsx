import React, { PropTypes } from 'react'
import DocumentTitle from 'react-document-title'
import { link } from 'gatsby-helpers'

export default class Html extends React.Component {
  render () {
    const {
      body,
      title
    } = this.props
    const pageTitle = title || DocumentTitle.rewind()
    return (
      <html lang='en' className='H(100%) Fz(ms0) Fz(ms1)--omd Fz(ms2)--lg Lh(1.5)'>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <link rel='stylesheet' href={link('/bundle.css')} />
          <title>
            {pageTitle}
          </title>
          <link rel='shortcut icon' href='/favicon.ico' />
        </head>
        <body className='Miw(300px) M(0) Ff(mono) C(#fff.9) Lts(-0.003em) Wds(-0.1em)'>
          <div id='react-mount' className='Bgc(sky) Bgi(grddarkt)' dangerouslySetInnerHTML={{__html: body}} />
          <script src={link('/bundle.js')} />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string
}

Html.defaultProps = { body: '' }
