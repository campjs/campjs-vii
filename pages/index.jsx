import React, { Component, PropTypes } from 'react'
import DocumentTitle from 'react-document-title'

class Index extends Component {
  render () {
    const {
      config
    } = this.props
    return (
      <DocumentTitle title={config.htmlTitle} />
    )
  }
}

Index.propTypes = {
  config: PropTypes.object
}

export default Index
