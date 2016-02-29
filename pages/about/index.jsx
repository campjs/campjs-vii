import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

export default class About extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={'About | ' + config.siteTitle} />
    )
  }
}

About.propTypes = {
  config: PropTypes.object
}
