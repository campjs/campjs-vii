import React, { PropTypes } from 'react'

const classes = 'D(ib) Pos(r) W(ms2) H(ms2) '

const Icon = ({
  name,
  className,
  ...props
}) => {
  const svgIcon = `<use xlink:href="#${name}" />`
  return (
    <span
      className={classes + className}
      {...props}
    >
      <svg
        dangerouslySetInnerHTML={{ __html: svgIcon }}
        className='Pos(a) StretchedBox Mah(100%) Maw(100%) Fill(cc)'
      />
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Icon
